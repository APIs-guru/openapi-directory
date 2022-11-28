
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/email/ - Amazon Web Services documentation"""
import requests
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://email.{region}.amazonaws.com",
	"https://email.{region}.amazonaws.com",
	"http://email.{region}.amazonaws.com.cn",
	"https://email.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/email/ - Amazon Web Services documentation"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def get_clone_receipt_rule_set(self, request: operations.GetCloneReceiptRuleSetRequest) -> operations.GetCloneReceiptRuleSetResponse:
        r"""<p>Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set.</p> <p>For information about setting up rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CloneReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCloneReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_create_configuration_set(self, request: operations.GetCreateConfigurationSetRequest) -> operations.GetCreateConfigurationSetResponse:
        r"""<p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateConfigurationSet"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreateConfigurationSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_create_configuration_set_tracking_options(self, request: operations.GetCreateConfigurationSetTrackingOptionsRequest) -> operations.GetCreateConfigurationSetTrackingOptionsResponse:
        r"""<p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateConfigurationSetTrackingOptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreateConfigurationSetTrackingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_create_custom_verification_email_template(self, request: operations.GetCreateCustomVerificationEmailTemplateRequest) -> operations.GetCreateCustomVerificationEmailTemplateResponse:
        r"""<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html\">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateCustomVerificationEmailTemplate"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreateCustomVerificationEmailTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_create_receipt_rule_set(self, request: operations.GetCreateReceiptRuleSetRequest) -> operations.GetCreateReceiptRuleSetResponse:
        r"""<p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreateReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_create_template(self, request: operations.GetCreateTemplateRequest) -> operations.GetCreateTemplateResponse:
        r"""<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateTemplate"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreateTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_configuration_set(self, request: operations.GetDeleteConfigurationSetRequest) -> operations.GetDeleteConfigurationSetResponse:
        r"""<p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteConfigurationSet"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteConfigurationSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_configuration_set_event_destination(self, request: operations.GetDeleteConfigurationSetEventDestinationRequest) -> operations.GetDeleteConfigurationSetEventDestinationResponse:
        r"""<p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteConfigurationSetEventDestination"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteConfigurationSetEventDestinationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_configuration_set_tracking_options(self, request: operations.GetDeleteConfigurationSetTrackingOptionsRequest) -> operations.GetDeleteConfigurationSetTrackingOptionsResponse:
        r"""<p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html\">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteConfigurationSetTrackingOptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteConfigurationSetTrackingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_custom_verification_email_template(self, request: operations.GetDeleteCustomVerificationEmailTemplateRequest) -> operations.GetDeleteCustomVerificationEmailTemplateResponse:
        r"""<p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html\">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteCustomVerificationEmailTemplate"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteCustomVerificationEmailTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_delete_identity(self, request: operations.GetDeleteIdentityRequest) -> operations.GetDeleteIdentityResponse:
        r"""<p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteIdentity"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteIdentityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_identity_policy(self, request: operations.GetDeleteIdentityPolicyRequest) -> operations.GetDeleteIdentityPolicyResponse:
        r"""<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteIdentityPolicy"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteIdentityPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_receipt_filter(self, request: operations.GetDeleteReceiptFilterRequest) -> operations.GetDeleteReceiptFilterResponse:
        r"""<p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteReceiptFilter"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteReceiptFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_receipt_rule(self, request: operations.GetDeleteReceiptRuleRequest) -> operations.GetDeleteReceiptRuleResponse:
        r"""<p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteReceiptRule"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteReceiptRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_receipt_rule_set(self, request: operations.GetDeleteReceiptRuleSetRequest) -> operations.GetDeleteReceiptRuleSetResponse:
        r"""<p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_template(self, request: operations.GetDeleteTemplateRequest) -> operations.GetDeleteTemplateResponse:
        r"""<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteTemplate"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_verified_email_address(self, request: operations.GetDeleteVerifiedEmailAddressRequest) -> operations.GetDeleteVerifiedEmailAddressResponse:
        r"""Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteVerifiedEmailAddress"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteVerifiedEmailAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_describe_active_receipt_rule_set(self, request: operations.GetDescribeActiveReceiptRuleSetRequest) -> operations.GetDescribeActiveReceiptRuleSetResponse:
        r"""<p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeActiveReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeActiveReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_configuration_set(self, request: operations.GetDescribeConfigurationSetRequest) -> operations.GetDescribeConfigurationSetResponse:
        r"""<p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeConfigurationSet"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeConfigurationSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_receipt_rule(self, request: operations.GetDescribeReceiptRuleRequest) -> operations.GetDescribeReceiptRuleResponse:
        r"""<p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeReceiptRule"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeReceiptRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_receipt_rule_set(self, request: operations.GetDescribeReceiptRuleSetRequest) -> operations.GetDescribeReceiptRuleSetResponse:
        r"""<p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_get_account_sending_enabled(self, request: operations.GetGetAccountSendingEnabledRequest) -> operations.GetGetAccountSendingEnabledResponse:
        r"""<p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetAccountSendingEnabled"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetAccountSendingEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_get_custom_verification_email_template(self, request: operations.GetGetCustomVerificationEmailTemplateRequest) -> operations.GetGetCustomVerificationEmailTemplateResponse:
        r"""<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html\">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetCustomVerificationEmailTemplate"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetCustomVerificationEmailTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_get_identity_dkim_attributes(self, request: operations.GetGetIdentityDkimAttributesRequest) -> operations.GetGetIdentityDkimAttributesResponse:
        r"""<p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetIdentityDkimAttributes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetIdentityDkimAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_get_identity_mail_from_domain_attributes(self, request: operations.GetGetIdentityMailFromDomainAttributesRequest) -> operations.GetGetIdentityMailFromDomainAttributesResponse:
        r"""<p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetIdentityMailFromDomainAttributes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetIdentityMailFromDomainAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_get_identity_notification_attributes(self, request: operations.GetGetIdentityNotificationAttributesRequest) -> operations.GetGetIdentityNotificationAttributesResponse:
        r"""<p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetIdentityNotificationAttributes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetIdentityNotificationAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_get_identity_policies(self, request: operations.GetGetIdentityPoliciesRequest) -> operations.GetGetIdentityPoliciesResponse:
        r"""<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetIdentityPolicies"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetIdentityPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_get_identity_verification_attributes(self, request: operations.GetGetIdentityVerificationAttributesRequest) -> operations.GetGetIdentityVerificationAttributesResponse:
        r"""<p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is \"Pending\" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to \"Success\". If the link is not clicked within 24 hours, the verification status changes to \"Failed.\" In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain's verification status is \"Pending\" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to \"Success\". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to \"Failed.\" In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetIdentityVerificationAttributes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetIdentityVerificationAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_get_send_quota(self, request: operations.GetGetSendQuotaRequest) -> operations.GetGetSendQuotaResponse:
        r"""<p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetSendQuota"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetSendQuotaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_get_send_statistics(self, request: operations.GetGetSendStatisticsRequest) -> operations.GetGetSendStatisticsResponse:
        r"""<p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetSendStatistics"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetSendStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_get_template(self, request: operations.GetGetTemplateRequest) -> operations.GetGetTemplateResponse:
        r"""<p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetTemplate"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_list_configuration_sets(self, request: operations.GetListConfigurationSetsRequest) -> operations.GetListConfigurationSetsResponse:
        r"""<p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListConfigurationSets"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListConfigurationSetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_list_custom_verification_email_templates(self, request: operations.GetListCustomVerificationEmailTemplatesRequest) -> operations.GetListCustomVerificationEmailTemplatesResponse:
        r"""<p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html\">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListCustomVerificationEmailTemplates"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListCustomVerificationEmailTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_list_identities(self, request: operations.GetListIdentitiesRequest) -> operations.GetListIdentitiesResponse:
        r"""<p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListIdentities"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListIdentitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_list_identity_policies(self, request: operations.GetListIdentityPoliciesRequest) -> operations.GetListIdentityPoliciesResponse:
        r"""<p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListIdentityPolicies"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListIdentityPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_list_receipt_filters(self, request: operations.GetListReceiptFiltersRequest) -> operations.GetListReceiptFiltersResponse:
        r"""<p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListReceiptFilters"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListReceiptFiltersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_list_receipt_rule_sets(self, request: operations.GetListReceiptRuleSetsRequest) -> operations.GetListReceiptRuleSetsResponse:
        r"""<p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListReceiptRuleSets"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListReceiptRuleSetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_list_templates(self, request: operations.GetListTemplatesRequest) -> operations.GetListTemplatesResponse:
        r"""<p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListTemplates"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_list_verified_email_addresses(self, request: operations.GetListVerifiedEmailAddressesRequest) -> operations.GetListVerifiedEmailAddressesResponse:
        r"""Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListVerifiedEmailAddresses"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListVerifiedEmailAddressesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_put_configuration_set_delivery_options(self, request: operations.GetPutConfigurationSetDeliveryOptionsRequest) -> operations.GetPutConfigurationSetDeliveryOptionsResponse:
        r"""Adds or updates the delivery options for a configuration set.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PutConfigurationSetDeliveryOptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPutConfigurationSetDeliveryOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_put_identity_policy(self, request: operations.GetPutIdentityPolicyRequest) -> operations.GetPutIdentityPolicyResponse:
        r"""<p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PutIdentityPolicy"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPutIdentityPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_reorder_receipt_rule_set(self, request: operations.GetReorderReceiptRuleSetRequest) -> operations.GetReorderReceiptRuleSetResponse:
        r"""<p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ReorderReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReorderReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_send_custom_verification_email(self, request: operations.GetSendCustomVerificationEmailRequest) -> operations.GetSendCustomVerificationEmailResponse:
        r"""<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html\">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SendCustomVerificationEmail"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSendCustomVerificationEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_set_active_receipt_rule_set(self, request: operations.GetSetActiveReceiptRuleSetRequest) -> operations.GetSetActiveReceiptRuleSetResponse:
        r"""<p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetActiveReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetActiveReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_set_identity_dkim_enabled(self, request: operations.GetSetIdentityDkimEnabledRequest) -> operations.GetSetIdentityDkimEnabledResponse:
        r"""<p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address.</p> <note> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up to use Easy DKIM.</p> </note> <p>You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn't complete. </p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetIdentityDkimEnabled"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetIdentityDkimEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_set_identity_feedback_forwarding_enabled(self, request: operations.GetSetIdentityFeedbackForwardingEnabledRequest) -> operations.GetSetIdentityFeedbackForwardingEnabledResponse:
        r"""<p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetIdentityFeedbackForwardingEnabled"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetIdentityFeedbackForwardingEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_set_identity_headers_in_notifications_enabled(self, request: operations.GetSetIdentityHeadersInNotificationsEnabledRequest) -> operations.GetSetIdentityHeadersInNotificationsEnabledResponse:
        r"""<p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetIdentityHeadersInNotificationsEnabled"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetIdentityHeadersInNotificationsEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_set_identity_mail_from_domain(self, request: operations.GetSetIdentityMailFromDomainRequest) -> operations.GetSetIdentityMailFromDomainResponse:
        r"""<p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html\">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetIdentityMailFromDomain"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetIdentityMailFromDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_set_identity_notification_topic(self, request: operations.GetSetIdentityNotificationTopicRequest) -> operations.GetSetIdentityNotificationTopicResponse:
        r"""<p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetIdentityNotificationTopic"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetIdentityNotificationTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_set_receipt_rule_position(self, request: operations.GetSetReceiptRulePositionRequest) -> operations.GetSetReceiptRulePositionResponse:
        r"""<p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetReceiptRulePosition"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetReceiptRulePositionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_test_render_template(self, request: operations.GetTestRenderTemplateRequest) -> operations.GetTestRenderTemplateResponse:
        r"""<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=TestRenderTemplate"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTestRenderTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_update_account_sending_enabled(self, request: operations.GetUpdateAccountSendingEnabledRequest) -> operations.GetUpdateAccountSendingEnabledResponse:
        r"""<p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateAccountSendingEnabled"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdateAccountSendingEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_update_configuration_set_reputation_metrics_enabled(self, request: operations.GetUpdateConfigurationSetReputationMetricsEnabledRequest) -> operations.GetUpdateConfigurationSetReputationMetricsEnabledResponse:
        r"""<p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateConfigurationSetReputationMetricsEnabled"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdateConfigurationSetReputationMetricsEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_update_configuration_set_sending_enabled(self, request: operations.GetUpdateConfigurationSetSendingEnabledRequest) -> operations.GetUpdateConfigurationSetSendingEnabledResponse:
        r"""<p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateConfigurationSetSendingEnabled"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdateConfigurationSetSendingEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_update_configuration_set_tracking_options(self, request: operations.GetUpdateConfigurationSetTrackingOptionsRequest) -> operations.GetUpdateConfigurationSetTrackingOptionsResponse:
        r"""<p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateConfigurationSetTrackingOptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdateConfigurationSetTrackingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_update_custom_verification_email_template(self, request: operations.GetUpdateCustomVerificationEmailTemplateRequest) -> operations.GetUpdateCustomVerificationEmailTemplateResponse:
        r"""<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html\">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateCustomVerificationEmailTemplate"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdateCustomVerificationEmailTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_update_template(self, request: operations.GetUpdateTemplateRequest) -> operations.GetUpdateTemplateResponse:
        r"""<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateTemplate"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdateTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_verify_domain_dkim(self, request: operations.GetVerifyDomainDkimRequest) -> operations.GetVerifyDomainDkimResponse:
        r"""<p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html\">verify it</a> or you successfully <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html\">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=VerifyDomainDkim"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVerifyDomainDkimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_verify_domain_identity(self, request: operations.GetVerifyDomainIdentityRequest) -> operations.GetVerifyDomainIdentityResponse:
        r"""<p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html\">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=VerifyDomainIdentity"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVerifyDomainIdentityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_verify_email_address(self, request: operations.GetVerifyEmailAddressRequest) -> operations.GetVerifyEmailAddressResponse:
        r"""Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=VerifyEmailAddress"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVerifyEmailAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_verify_email_identity(self, request: operations.GetVerifyEmailIdentityRequest) -> operations.GetVerifyEmailIdentityResponse:
        r"""<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=VerifyEmailIdentity"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVerifyEmailIdentityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_clone_receipt_rule_set(self, request: operations.PostCloneReceiptRuleSetRequest) -> operations.PostCloneReceiptRuleSetResponse:
        r"""<p>Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set.</p> <p>For information about setting up rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CloneReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCloneReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_configuration_set(self, request: operations.PostCreateConfigurationSetRequest) -> operations.PostCreateConfigurationSetResponse:
        r"""<p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateConfigurationSet"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateConfigurationSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_configuration_set_event_destination(self, request: operations.PostCreateConfigurationSetEventDestinationRequest) -> operations.PostCreateConfigurationSetEventDestinationResponse:
        r"""<p>Creates a configuration set event destination.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>An event destination is the AWS service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateConfigurationSetEventDestination"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateConfigurationSetEventDestinationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_configuration_set_tracking_options(self, request: operations.PostCreateConfigurationSetTrackingOptionsRequest) -> operations.PostCreateConfigurationSetTrackingOptionsResponse:
        r"""<p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateConfigurationSetTrackingOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateConfigurationSetTrackingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_custom_verification_email_template(self, request: operations.PostCreateCustomVerificationEmailTemplateRequest) -> operations.PostCreateCustomVerificationEmailTemplateResponse:
        r"""<p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html\">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateCustomVerificationEmailTemplate"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateCustomVerificationEmailTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_receipt_filter(self, request: operations.PostCreateReceiptFilterRequest) -> operations.PostCreateReceiptFilterResponse:
        r"""<p>Creates a new IP address filter.</p> <p>For information about setting up IP address filters, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateReceiptFilter"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateReceiptFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_receipt_rule(self, request: operations.PostCreateReceiptRuleRequest) -> operations.PostCreateReceiptRuleResponse:
        r"""<p>Creates a receipt rule.</p> <p>For information about setting up receipt rules, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateReceiptRule"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateReceiptRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 486:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_receipt_rule_set(self, request: operations.PostCreateReceiptRuleSetRequest) -> operations.PostCreateReceiptRuleSetResponse:
        r"""<p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_template(self, request: operations.PostCreateTemplateRequest) -> operations.PostCreateTemplateResponse:
        r"""<p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateTemplate"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_configuration_set(self, request: operations.PostDeleteConfigurationSetRequest) -> operations.PostDeleteConfigurationSetResponse:
        r"""<p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteConfigurationSet"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteConfigurationSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_configuration_set_event_destination(self, request: operations.PostDeleteConfigurationSetEventDestinationRequest) -> operations.PostDeleteConfigurationSetEventDestinationResponse:
        r"""<p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteConfigurationSetEventDestination"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteConfigurationSetEventDestinationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_configuration_set_tracking_options(self, request: operations.PostDeleteConfigurationSetTrackingOptionsRequest) -> operations.PostDeleteConfigurationSetTrackingOptionsResponse:
        r"""<p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html\">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteConfigurationSetTrackingOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteConfigurationSetTrackingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_custom_verification_email_template(self, request: operations.PostDeleteCustomVerificationEmailTemplateRequest) -> operations.PostDeleteCustomVerificationEmailTemplateResponse:
        r"""<p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html\">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteCustomVerificationEmailTemplate"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteCustomVerificationEmailTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_delete_identity(self, request: operations.PostDeleteIdentityRequest) -> operations.PostDeleteIdentityResponse:
        r"""<p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteIdentity"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteIdentityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_identity_policy(self, request: operations.PostDeleteIdentityPolicyRequest) -> operations.PostDeleteIdentityPolicyResponse:
        r"""<p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteIdentityPolicy"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteIdentityPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_receipt_filter(self, request: operations.PostDeleteReceiptFilterRequest) -> operations.PostDeleteReceiptFilterResponse:
        r"""<p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteReceiptFilter"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteReceiptFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_receipt_rule(self, request: operations.PostDeleteReceiptRuleRequest) -> operations.PostDeleteReceiptRuleResponse:
        r"""<p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteReceiptRule"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteReceiptRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_receipt_rule_set(self, request: operations.PostDeleteReceiptRuleSetRequest) -> operations.PostDeleteReceiptRuleSetResponse:
        r"""<p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_template(self, request: operations.PostDeleteTemplateRequest) -> operations.PostDeleteTemplateResponse:
        r"""<p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteTemplate"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_verified_email_address(self, request: operations.PostDeleteVerifiedEmailAddressRequest) -> operations.PostDeleteVerifiedEmailAddressResponse:
        r"""Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteVerifiedEmailAddress"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteVerifiedEmailAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_describe_active_receipt_rule_set(self, request: operations.PostDescribeActiveReceiptRuleSetRequest) -> operations.PostDescribeActiveReceiptRuleSetResponse:
        r"""<p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeActiveReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeActiveReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_configuration_set(self, request: operations.PostDescribeConfigurationSetRequest) -> operations.PostDescribeConfigurationSetResponse:
        r"""<p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeConfigurationSet"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeConfigurationSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_receipt_rule(self, request: operations.PostDescribeReceiptRuleRequest) -> operations.PostDescribeReceiptRuleResponse:
        r"""<p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeReceiptRule"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeReceiptRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_receipt_rule_set(self, request: operations.PostDescribeReceiptRuleSetRequest) -> operations.PostDescribeReceiptRuleSetResponse:
        r"""<p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_get_account_sending_enabled(self, request: operations.PostGetAccountSendingEnabledRequest) -> operations.PostGetAccountSendingEnabledResponse:
        r"""<p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetAccountSendingEnabled"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetAccountSendingEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_get_custom_verification_email_template(self, request: operations.PostGetCustomVerificationEmailTemplateRequest) -> operations.PostGetCustomVerificationEmailTemplateResponse:
        r"""<p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html\">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetCustomVerificationEmailTemplate"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetCustomVerificationEmailTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_get_identity_dkim_attributes(self, request: operations.PostGetIdentityDkimAttributesRequest) -> operations.PostGetIdentityDkimAttributesResponse:
        r"""<p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetIdentityDkimAttributes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetIdentityDkimAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_get_identity_mail_from_domain_attributes(self, request: operations.PostGetIdentityMailFromDomainAttributesRequest) -> operations.PostGetIdentityMailFromDomainAttributesResponse:
        r"""<p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetIdentityMailFromDomainAttributes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetIdentityMailFromDomainAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_get_identity_notification_attributes(self, request: operations.PostGetIdentityNotificationAttributesRequest) -> operations.PostGetIdentityNotificationAttributesResponse:
        r"""<p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetIdentityNotificationAttributes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetIdentityNotificationAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_get_identity_policies(self, request: operations.PostGetIdentityPoliciesRequest) -> operations.PostGetIdentityPoliciesResponse:
        r"""<p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetIdentityPolicies"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetIdentityPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_get_identity_verification_attributes(self, request: operations.PostGetIdentityVerificationAttributesRequest) -> operations.PostGetIdentityVerificationAttributesResponse:
        r"""<p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is \"Pending\" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to \"Success\". If the link is not clicked within 24 hours, the verification status changes to \"Failed.\" In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain's verification status is \"Pending\" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to \"Success\". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to \"Failed.\" In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetIdentityVerificationAttributes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetIdentityVerificationAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_get_send_quota(self, request: operations.PostGetSendQuotaRequest) -> operations.PostGetSendQuotaResponse:
        r"""<p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetSendQuota"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetSendQuotaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_get_send_statistics(self, request: operations.PostGetSendStatisticsRequest) -> operations.PostGetSendStatisticsResponse:
        r"""<p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetSendStatistics"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetSendStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_get_template(self, request: operations.PostGetTemplateRequest) -> operations.PostGetTemplateResponse:
        r"""<p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=GetTemplate"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_list_configuration_sets(self, request: operations.PostListConfigurationSetsRequest) -> operations.PostListConfigurationSetsResponse:
        r"""<p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListConfigurationSets"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListConfigurationSetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_list_custom_verification_email_templates(self, request: operations.PostListCustomVerificationEmailTemplatesRequest) -> operations.PostListCustomVerificationEmailTemplatesResponse:
        r"""<p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html\">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListCustomVerificationEmailTemplates"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListCustomVerificationEmailTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_list_identities(self, request: operations.PostListIdentitiesRequest) -> operations.PostListIdentitiesResponse:
        r"""<p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListIdentities"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListIdentitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_list_identity_policies(self, request: operations.PostListIdentityPoliciesRequest) -> operations.PostListIdentityPoliciesResponse:
        r"""<p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListIdentityPolicies"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListIdentityPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_list_receipt_filters(self, request: operations.PostListReceiptFiltersRequest) -> operations.PostListReceiptFiltersResponse:
        r"""<p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListReceiptFilters"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListReceiptFiltersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_list_receipt_rule_sets(self, request: operations.PostListReceiptRuleSetsRequest) -> operations.PostListReceiptRuleSetsResponse:
        r"""<p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListReceiptRuleSets"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListReceiptRuleSetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_list_templates(self, request: operations.PostListTemplatesRequest) -> operations.PostListTemplatesResponse:
        r"""<p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListTemplates"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_list_verified_email_addresses(self, request: operations.PostListVerifiedEmailAddressesRequest) -> operations.PostListVerifiedEmailAddressesResponse:
        r"""Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ListVerifiedEmailAddresses"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListVerifiedEmailAddressesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_put_configuration_set_delivery_options(self, request: operations.PostPutConfigurationSetDeliveryOptionsRequest) -> operations.PostPutConfigurationSetDeliveryOptionsResponse:
        r"""Adds or updates the delivery options for a configuration set.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PutConfigurationSetDeliveryOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPutConfigurationSetDeliveryOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_put_identity_policy(self, request: operations.PostPutIdentityPolicyRequest) -> operations.PostPutIdentityPolicyResponse:
        r"""<p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=PutIdentityPolicy"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPutIdentityPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_reorder_receipt_rule_set(self, request: operations.PostReorderReceiptRuleSetRequest) -> operations.PostReorderReceiptRuleSetResponse:
        r"""<p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=ReorderReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostReorderReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_send_bounce(self, request: operations.PostSendBounceRequest) -> operations.PostSendBounceResponse:
        r"""<p>Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this API on an email up to 24 hours after you receive it.</p> <note> <p>You cannot use this API to send generic bounces for mail that was not received by Amazon SES.</p> </note> <p>For information about receiving email through Amazon SES, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SendBounce"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSendBounceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_send_bulk_templated_email(self, request: operations.PostSendBulkTemplatedEmailRequest) -> operations.PostSendBulkTemplatedEmailResponse:
        r"""<p>Composes an email message to multiple destinations. The message body is created using an email template.</p> <p>In order to send email using the <code>SendBulkTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html\">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Each <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendBulkTemplatedEmail</code> operation several times to send the message to each group.</p> </li> <li> <p>The number of destinations you can contact in a single call to the API may be limited by your account's maximum sending rate.</p> </li> </ul>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SendBulkTemplatedEmail"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSendBulkTemplatedEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_send_custom_verification_email(self, request: operations.PostSendCustomVerificationEmailRequest) -> operations.PostSendCustomVerificationEmailResponse:
        r"""<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html\">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SendCustomVerificationEmail"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSendCustomVerificationEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_send_email(self, request: operations.PostSendEmailRequest) -> operations.PostSendEmailResponse:
        r"""<p>Composes an email message and immediately queues it for sending. In order to send email using the <code>SendEmail</code> operation, your message must meet the following requirements:</p> <ul> <li> <p>The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an \"Email address not verified\" error. </p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html\">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendEmail</code> operation several times to send the message to each group.</p> </li> </ul> <important> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html\">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </important>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SendEmail"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSendEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_send_raw_email(self, request: operations.PostSendRawEmailRequest) -> operations.PostSendRawEmailResponse:
        r"""<p>Composes an email message and immediately queues it for sending.</p> <p>This operation is more flexible than the <code>SendEmail</code> API operation. When you use the <code>SendRawEmail</code> operation, you can specify the headers of the message as well as its content. This flexibility is useful, for example, when you want to send a multipart MIME email (such a message that contains both a text and an HTML version). You can also use this operation to send messages that include attachments.</p> <p>The <code>SendRawEmail</code> operation has the following requirements:</p> <ul> <li> <p>You can only send email from <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html\">verified email addresses or domains</a>. If you try to send email from an address that isn't verified, the operation results in an \"Email address not verified\" error.</p> </li> <li> <p>If your account is still in the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html\">Amazon SES sandbox</a>, you can only send email to other verified addresses in your account, or to addresses that are associated with the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html\">Amazon SES mailbox simulator</a>.</p> </li> <li> <p>The maximum message size, including attachments, is 10 MB.</p> </li> <li> <p>Each message has to include at least one recipient address. A recipient address includes any address on the To:, CC:, or BCC: lines.</p> </li> <li> <p>If you send a single message to more than one recipient address, and one of the recipient addresses isn't in a valid format (that is, it's not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), Amazon SES rejects the entire message, even if the other addresses are valid.</p> </li> <li> <p>Each message can include up to 50 recipient addresses across the To:, CC:, or BCC: lines. If you need to send a single message to more than 50 recipients, you have to split the list of recipient addresses into groups of less than 50 recipients, and send separate messages to each group.</p> </li> <li> <p>Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message parts. However, if Amazon SES has to modify the contents of your message (for example, if you use open and click tracking), 8-bit content isn't preserved. For this reason, we highly recommend that you encode all content that isn't 7-bit ASCII. For more information, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html#send-email-mime-encoding\">MIME Encoding</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> </ul> <p>Additionally, keep the following considerations in mind when using the <code>SendRawEmail</code> operation:</p> <ul> <li> <p>Although you can customize the message headers when using the <code>SendRawEmail</code> operation, Amazon SES will automatically apply its own <code>Message-ID</code> and <code>Date</code> headers; if you passed these headers when creating the message, they will be overwritten by the values that Amazon SES provides.</p> </li> <li> <p>If you are using sending authorization to send on behalf of another user, <code>SendRawEmail</code> enables you to specify the cross-account identity for the email's Source, From, and Return-Path parameters in one of two ways: you can pass optional parameters <code>SourceArn</code>, <code>FromArn</code>, and/or <code>ReturnPathArn</code> to the API, or you can include the following X-headers in the header of your raw email:</p> <ul> <li> <p> <code>X-SES-SOURCE-ARN</code> </p> </li> <li> <p> <code>X-SES-FROM-ARN</code> </p> </li> <li> <p> <code>X-SES-RETURN-PATH-ARN</code> </p> </li> </ul> <important> <p>Don't include these X-headers in the DKIM signature. Amazon SES removes these before it sends the email.</p> </important> <p>If you only specify the <code>SourceIdentityArn</code> parameter, Amazon SES sets the From and Return-Path addresses to the same identity that you specified.</p> <p>For more information about sending authorization, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html\">Using Sending Authorization with Amazon SES</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html\">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> </ul>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SendRawEmail"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSendRawEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_send_templated_email(self, request: operations.PostSendTemplatedEmailRequest) -> operations.PostSendTemplatedEmailResponse:
        r"""<p>Composes an email message using an email template and immediately queues it for sending.</p> <p>In order to send email using the <code>SendTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html\">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Calls to the <code>SendTemplatedEmail</code> operation may only include one <code>Destination</code> parameter. A destination is a set of recipients who will receive the same version of the email. The <code>Destination</code> parameter can include up to 50 recipients, across the To:, CC: and BCC: fields.</p> </li> <li> <p>The <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> </ul> <important> <p>If your call to the <code>SendTemplatedEmail</code> operation includes all of the required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES can't render the email because the template contains errors, it doesn't send the email. Additionally, because it already accepted the message, Amazon SES doesn't return a message stating that it was unable to send the email.</p> <p>For these reasons, we highly recommend that you set up Amazon SES to send you notifications when Rendering Failure events occur. For more information, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html\">Sending Personalized Email Using the Amazon SES API</a> in the <i>Amazon Simple Email Service Developer Guide</i>.</p> </important>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SendTemplatedEmail"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSendTemplatedEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_set_active_receipt_rule_set(self, request: operations.PostSetActiveReceiptRuleSetRequest) -> operations.PostSetActiveReceiptRuleSetResponse:
        r"""<p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetActiveReceiptRuleSet"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetActiveReceiptRuleSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_set_identity_dkim_enabled(self, request: operations.PostSetIdentityDkimEnabledRequest) -> operations.PostSetIdentityDkimEnabledResponse:
        r"""<p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address.</p> <note> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up to use Easy DKIM.</p> </note> <p>You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn't complete. </p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetIdentityDkimEnabled"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetIdentityDkimEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_set_identity_feedback_forwarding_enabled(self, request: operations.PostSetIdentityFeedbackForwardingEnabledRequest) -> operations.PostSetIdentityFeedbackForwardingEnabledResponse:
        r"""<p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetIdentityFeedbackForwardingEnabled"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetIdentityFeedbackForwardingEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_set_identity_headers_in_notifications_enabled(self, request: operations.PostSetIdentityHeadersInNotificationsEnabledRequest) -> operations.PostSetIdentityHeadersInNotificationsEnabledResponse:
        r"""<p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetIdentityHeadersInNotificationsEnabled"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetIdentityHeadersInNotificationsEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_set_identity_mail_from_domain(self, request: operations.PostSetIdentityMailFromDomainRequest) -> operations.PostSetIdentityMailFromDomainResponse:
        r"""<p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html\">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetIdentityMailFromDomain"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetIdentityMailFromDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_set_identity_notification_topic(self, request: operations.PostSetIdentityNotificationTopicRequest) -> operations.PostSetIdentityNotificationTopicResponse:
        r"""<p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetIdentityNotificationTopic"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetIdentityNotificationTopicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_set_receipt_rule_position(self, request: operations.PostSetReceiptRulePositionRequest) -> operations.PostSetReceiptRulePositionResponse:
        r"""<p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=SetReceiptRulePosition"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetReceiptRulePositionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_test_render_template(self, request: operations.PostTestRenderTemplateRequest) -> operations.PostTestRenderTemplateResponse:
        r"""<p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=TestRenderTemplate"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTestRenderTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_account_sending_enabled(self, request: operations.PostUpdateAccountSendingEnabledRequest) -> operations.PostUpdateAccountSendingEnabledResponse:
        r"""<p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateAccountSendingEnabled"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateAccountSendingEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_update_configuration_set_event_destination(self, request: operations.PostUpdateConfigurationSetEventDestinationRequest) -> operations.PostUpdateConfigurationSetEventDestinationResponse:
        r"""<p>Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html\">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateConfigurationSetEventDestination"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateConfigurationSetEventDestinationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_configuration_set_reputation_metrics_enabled(self, request: operations.PostUpdateConfigurationSetReputationMetricsEnabledRequest) -> operations.PostUpdateConfigurationSetReputationMetricsEnabledResponse:
        r"""<p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateConfigurationSetReputationMetricsEnabled"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateConfigurationSetReputationMetricsEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_configuration_set_sending_enabled(self, request: operations.PostUpdateConfigurationSetSendingEnabledRequest) -> operations.PostUpdateConfigurationSetSendingEnabledResponse:
        r"""<p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateConfigurationSetSendingEnabled"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateConfigurationSetSendingEnabledResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_configuration_set_tracking_options(self, request: operations.PostUpdateConfigurationSetTrackingOptionsRequest) -> operations.PostUpdateConfigurationSetTrackingOptionsResponse:
        r"""<p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html\">Amazon SES Developer Guide</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateConfigurationSetTrackingOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateConfigurationSetTrackingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_custom_verification_email_template(self, request: operations.PostUpdateCustomVerificationEmailTemplateRequest) -> operations.PostUpdateCustomVerificationEmailTemplateResponse:
        r"""<p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html\">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateCustomVerificationEmailTemplate"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateCustomVerificationEmailTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_receipt_rule(self, request: operations.PostUpdateReceiptRuleRequest) -> operations.PostUpdateReceiptRuleResponse:
        r"""<p>Updates a receipt rule.</p> <p>For information about managing receipt rules, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateReceiptRule"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateReceiptRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 485:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_template(self, request: operations.PostUpdateTemplateRequest) -> operations.PostUpdateTemplateResponse:
        r"""<p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html\">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateTemplate"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_verify_domain_dkim(self, request: operations.PostVerifyDomainDkimRequest) -> operations.PostVerifyDomainDkimResponse:
        r"""<p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html\">verify it</a> or you successfully <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html\">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=VerifyDomainDkim"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVerifyDomainDkimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_verify_domain_identity(self, request: operations.PostVerifyDomainIdentityRequest) -> operations.PostVerifyDomainIdentityResponse:
        r"""<p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html\">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=VerifyDomainIdentity"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVerifyDomainIdentityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_verify_email_address(self, request: operations.PostVerifyEmailAddressRequest) -> operations.PostVerifyEmailAddressResponse:
        r"""Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=VerifyEmailAddress"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVerifyEmailAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_verify_email_identity(self, request: operations.PostVerifyEmailIdentityRequest) -> operations.PostVerifyEmailIdentityResponse:
        r"""<p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=VerifyEmailIdentity"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVerifyEmailIdentityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    