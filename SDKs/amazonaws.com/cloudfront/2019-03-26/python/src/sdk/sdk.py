
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/cloudfront/ - Amazon Web Services documentation"""
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://cloudfront.amazonaws.com",
	"http://cloudfront.{region}.amazonaws.com.cn",
	"https://cloudfront.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/cloudfront/ - Amazon Web Services documentation"""

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
        
    
    
    
    def create_cloud_front_origin_access_identity2019_03_26(self, request: operations.CreateCloudFrontOriginAccessIdentity20190326Request) -> operations.CreateCloudFrontOriginAccessIdentity20190326Response:
        r"""Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/origin-access-identity/cloudfront"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCloudFrontOriginAccessIdentity20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
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

    
    def create_distribution2019_03_26(self, request: operations.CreateDistribution20190326Request) -> operations.CreateDistribution20190326Response:
        r"""<p>Creates a new web distribution. You create a CloudFront distribution to tell CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. Send a <code>POST</code> request to the <code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.</p> <important> <p>When you update a distribution, there are more required fields than when you create a distribution. When you update your distribution by using <a href=\"https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html\">UpdateDistribution</a>, follow the steps included in the documentation to get the current configuration and then make your updates. This helps to make sure that you include all of the required fields. To view a summary, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html\">Required Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </important>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/distribution"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDistribution20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
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
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 493:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 494:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 495:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 496:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 497:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 498:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 499:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 501:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 505:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 506:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 507:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 508:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 509:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 510:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 511:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 512:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 513:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 514:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 515:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 516:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 517:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 518:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 519:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 520:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 521:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 522:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 523:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def create_distribution_with_tags2019_03_26(self, request: operations.CreateDistributionWithTags20190326Request) -> operations.CreateDistributionWithTags20190326Response:
        r"""Create a new distribution with tags.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/distribution#WithTags"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDistributionWithTags20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
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
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 493:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 494:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 495:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 496:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 497:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 498:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 499:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 501:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 505:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 506:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 507:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 508:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 509:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 510:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 511:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 512:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 513:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 514:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 515:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 516:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 517:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 518:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 519:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 520:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 521:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 522:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 523:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 524:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def create_field_level_encryption_config2019_03_26(self, request: operations.CreateFieldLevelEncryptionConfig20190326Request) -> operations.CreateFieldLevelEncryptionConfig20190326Response:
        r"""Create a new field-level encryption configuration.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/field-level-encryption"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFieldLevelEncryptionConfig20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
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
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def create_field_level_encryption_profile2019_03_26(self, request: operations.CreateFieldLevelEncryptionProfile20190326Request) -> operations.CreateFieldLevelEncryptionProfile20190326Response:
        r"""Create a field-level encryption profile.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/field-level-encryption-profile"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFieldLevelEncryptionProfile20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
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
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def create_invalidation2019_03_26(self, request: operations.CreateInvalidation20190326Request) -> operations.CreateInvalidation20190326Response:
        r"""Create a new invalidation. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/distribution/{DistributionId}/invalidation", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateInvalidation20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
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

    
    def create_public_key2019_03_26(self, request: operations.CreatePublicKey20190326Request) -> operations.CreatePublicKey20190326Response:
        r"""Add a new public key to CloudFront to use, for example, for field-level encryption. You can add a maximum of 10 public keys with one AWS account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/public-key"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePublicKey20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
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

    
    def create_streaming_distribution2019_03_26(self, request: operations.CreateStreamingDistribution20190326Request) -> operations.CreateStreamingDistribution20190326Response:
        r"""<p>Creates a new RTMP distribution. An RTMP distribution is similar to a web distribution, but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol (RTMP) instead of serving files using HTTP. </p> <p>To create a new distribution, submit a <code>POST</code> request to the <i>CloudFront API version</i>/distribution resource. The request body must include a document with a <i>StreamingDistributionConfig</i> element. The response echoes the <code>StreamingDistributionConfig</code> element and returns other information about the RTMP distribution.</p> <p>To get the status of your request, use the <i>GET StreamingDistribution</i> API action. When the value of <code>Enabled</code> is <code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your distribution is ready. A distribution usually deploys in less than 15 minutes.</p> <p>For more information about web distributions, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html\">Working with RTMP Distributions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a web distribution or an RTMP distribution, and when you invalidate objects. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values specified.</p> </important>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/streaming-distribution"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateStreamingDistribution20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
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
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def create_streaming_distribution_with_tags2019_03_26(self, request: operations.CreateStreamingDistributionWithTags20190326Request) -> operations.CreateStreamingDistributionWithTags20190326Response:
        r"""Create a new streaming distribution with tags.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/streaming-distribution#WithTags"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateStreamingDistributionWithTags20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
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
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def delete_cloud_front_origin_access_identity2019_03_26(self, request: operations.DeleteCloudFrontOriginAccessIdentity20190326Request) -> operations.DeleteCloudFrontOriginAccessIdentity20190326Response:
        r"""Delete an origin access identity. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/origin-access-identity/cloudfront/{Id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCloudFrontOriginAccessIdentity20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
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
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def delete_distribution2019_03_26(self, request: operations.DeleteDistribution20190326Request) -> operations.DeleteDistribution20190326Response:
        r"""Delete a distribution. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/distribution/{Id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDistribution20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
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
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def delete_field_level_encryption_config2019_03_26(self, request: operations.DeleteFieldLevelEncryptionConfig20190326Request) -> operations.DeleteFieldLevelEncryptionConfig20190326Response:
        r"""Remove a field-level encryption configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/field-level-encryption/{Id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFieldLevelEncryptionConfig20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
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
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def delete_field_level_encryption_profile2019_03_26(self, request: operations.DeleteFieldLevelEncryptionProfile20190326Request) -> operations.DeleteFieldLevelEncryptionProfile20190326Response:
        r"""Remove a field-level encryption profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/field-level-encryption-profile/{Id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFieldLevelEncryptionProfile20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
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
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def delete_public_key2019_03_26(self, request: operations.DeletePublicKey20190326Request) -> operations.DeletePublicKey20190326Response:
        r"""Remove a public key you previously added to CloudFront.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/public-key/{Id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePublicKey20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
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
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def delete_streaming_distribution2019_03_26(self, request: operations.DeleteStreamingDistribution20190326Request) -> operations.DeleteStreamingDistribution20190326Response:
        r"""<p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html\">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/streaming-distribution/{Id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStreamingDistribution20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
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
        elif r.status_code == 484:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_cloud_front_origin_access_identity2019_03_26(self, request: operations.GetCloudFrontOriginAccessIdentity20190326Request) -> operations.GetCloudFrontOriginAccessIdentity20190326Response:
        r"""Get the information about an origin access identity. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/origin-access-identity/cloudfront/{Id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCloudFrontOriginAccessIdentity20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_cloud_front_origin_access_identity_config2019_03_26(self, request: operations.GetCloudFrontOriginAccessIdentityConfig20190326Request) -> operations.GetCloudFrontOriginAccessIdentityConfig20190326Response:
        r"""Get the configuration information about an origin access identity. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/origin-access-identity/cloudfront/{Id}/config", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCloudFrontOriginAccessIdentityConfig20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_distribution2019_03_26(self, request: operations.GetDistribution20190326Request) -> operations.GetDistribution20190326Response:
        r"""Get the information about a distribution.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/distribution/{Id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistribution20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_distribution_config2019_03_26(self, request: operations.GetDistributionConfig20190326Request) -> operations.GetDistributionConfig20190326Response:
        r"""Get the configuration information about a distribution. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/distribution/{Id}/config", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistributionConfig20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_field_level_encryption2019_03_26(self, request: operations.GetFieldLevelEncryption20190326Request) -> operations.GetFieldLevelEncryption20190326Response:
        r"""Get the field-level encryption configuration information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/field-level-encryption/{Id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFieldLevelEncryption20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_field_level_encryption_config2019_03_26(self, request: operations.GetFieldLevelEncryptionConfig20190326Request) -> operations.GetFieldLevelEncryptionConfig20190326Response:
        r"""Get the field-level encryption configuration information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/field-level-encryption/{Id}/config", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFieldLevelEncryptionConfig20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_field_level_encryption_profile2019_03_26(self, request: operations.GetFieldLevelEncryptionProfile20190326Request) -> operations.GetFieldLevelEncryptionProfile20190326Response:
        r"""Get the field-level encryption profile information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/field-level-encryption-profile/{Id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFieldLevelEncryptionProfile20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_field_level_encryption_profile_config2019_03_26(self, request: operations.GetFieldLevelEncryptionProfileConfig20190326Request) -> operations.GetFieldLevelEncryptionProfileConfig20190326Response:
        r"""Get the field-level encryption profile configuration information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/field-level-encryption-profile/{Id}/config", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFieldLevelEncryptionProfileConfig20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_invalidation2019_03_26(self, request: operations.GetInvalidation20190326Request) -> operations.GetInvalidation20190326Response:
        r"""Get the information about an invalidation. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/distribution/{DistributionId}/invalidation/{Id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvalidation20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_public_key2019_03_26(self, request: operations.GetPublicKey20190326Request) -> operations.GetPublicKey20190326Response:
        r"""Get the public key information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/public-key/{Id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicKey20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_public_key_config2019_03_26(self, request: operations.GetPublicKeyConfig20190326Request) -> operations.GetPublicKeyConfig20190326Response:
        r"""Return public key configuration informaation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/public-key/{Id}/config", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicKeyConfig20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_streaming_distribution2019_03_26(self, request: operations.GetStreamingDistribution20190326Request) -> operations.GetStreamingDistribution20190326Response:
        r"""Gets information about a specified RTMP distribution, including the distribution configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/streaming-distribution/{Id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStreamingDistribution20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_streaming_distribution_config2019_03_26(self, request: operations.GetStreamingDistributionConfig20190326Request) -> operations.GetStreamingDistributionConfig20190326Response:
        r"""Get the configuration information about a streaming distribution. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/streaming-distribution/{Id}/config", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStreamingDistributionConfig20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def list_cloud_front_origin_access_identities2019_03_26(self, request: operations.ListCloudFrontOriginAccessIdentities20190326Request) -> operations.ListCloudFrontOriginAccessIdentities20190326Response:
        r"""Lists origin access identities.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/origin-access-identity/cloudfront"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCloudFrontOriginAccessIdentities20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def list_distributions2019_03_26(self, request: operations.ListDistributions20190326Request) -> operations.ListDistributions20190326Response:
        r"""List CloudFront distributions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/distribution"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDistributions20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def list_distributions_by_web_acl_id2019_03_26(self, request: operations.ListDistributionsByWebACLId20190326Request) -> operations.ListDistributionsByWebACLId20190326Response:
        r"""List the distributions that are associated with a specified AWS WAF web ACL. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/distributionsByWebACLId/{WebACLId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDistributionsByWebACLId20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def list_field_level_encryption_configs2019_03_26(self, request: operations.ListFieldLevelEncryptionConfigs20190326Request) -> operations.ListFieldLevelEncryptionConfigs20190326Response:
        r"""List all field-level encryption configurations that have been created in CloudFront for this account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/field-level-encryption"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFieldLevelEncryptionConfigs20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def list_field_level_encryption_profiles2019_03_26(self, request: operations.ListFieldLevelEncryptionProfiles20190326Request) -> operations.ListFieldLevelEncryptionProfiles20190326Response:
        r"""Request a list of field-level encryption profiles that have been created in CloudFront for this account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/field-level-encryption-profile"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFieldLevelEncryptionProfiles20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def list_invalidations2019_03_26(self, request: operations.ListInvalidations20190326Request) -> operations.ListInvalidations20190326Response:
        r"""Lists invalidation batches. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/distribution/{DistributionId}/invalidation", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListInvalidations20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def list_public_keys2019_03_26(self, request: operations.ListPublicKeys20190326Request) -> operations.ListPublicKeys20190326Response:
        r"""List all public keys that have been added to CloudFront for this account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/public-key"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPublicKeys20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def list_streaming_distributions2019_03_26(self, request: operations.ListStreamingDistributions20190326Request) -> operations.ListStreamingDistributions20190326Response:
        r"""List streaming distributions. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/streaming-distribution"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListStreamingDistributions20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def list_tags_for_resource2019_03_26(self, request: operations.ListTagsForResource20190326Request) -> operations.ListTagsForResource20190326Response:
        r"""List tags for a CloudFront resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/tagging#Resource"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTagsForResource20190326Response(status_code=r.status_code, content_type=content_type)
        
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

        return res

    
    def tag_resource2019_03_26(self, request: operations.TagResource20190326Request) -> operations.TagResource20190326Response:
        r"""Add tags to a CloudFront resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/tagging#Operation=Tag&Resource"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagResource20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
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

    
    def untag_resource2019_03_26(self, request: operations.UntagResource20190326Request) -> operations.UntagResource20190326Response:
        r"""Remove tags from a CloudFront resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/2019-03-26/tagging#Operation=Untag&Resource"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UntagResource20190326Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
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

    
    def update_cloud_front_origin_access_identity2019_03_26(self, request: operations.UpdateCloudFrontOriginAccessIdentity20190326Request) -> operations.UpdateCloudFrontOriginAccessIdentity20190326Response:
        r"""Update an origin access identity. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/origin-access-identity/cloudfront/{Id}/config", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCloudFrontOriginAccessIdentity20190326Response(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def update_distribution2019_03_26(self, request: operations.UpdateDistribution20190326Request) -> operations.UpdateDistribution20190326Response:
        r"""<p>Updates the configuration for a web distribution. </p> <important> <p>When you update a distribution, there are more required fields than when you create a distribution. When you update your distribution by using this API action, follow the steps here to get the current configuration and then make your updates, to make sure that you include all of the required fields. To view a summary, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html\">Required Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </important> <p>The update process includes getting the current distribution configuration, updating the XML document that is returned to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p> <p>For information about updating a distribution using the CloudFront console instead, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html\">Creating a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Submit a <a href=\"https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html\">GetDistributionConfig</a> request to get the current configuration and an <code>Etag</code> header for the distribution.</p> <note> <p>If you update the distribution again, you must get a new <code>Etag</code> header.</p> </note> </li> <li> <p>Update the XML document that was returned in the response to your <code>GetDistributionConfig</code> request to include your changes. </p> <important> <p>When you edit the XML file, be aware of the following:</p> <ul> <li> <p>You must strip out the ETag parameter that is returned.</p> </li> <li> <p>Additional fields are required when you update a distribution. There may be fields included in the XML file for features that you haven't configured for your distribution. This is expected and required to successfully update the distribution.</p> </li> <li> <p>You can't change the value of <code>CallerReference</code>. If you try to change this value, CloudFront returns an <code>IllegalUpdate</code> error. </p> </li> <li> <p>The new configuration replaces the existing configuration; the values that you specify in an <code>UpdateDistribution</code> request are not merged into your existing configuration. When you add, delete, or replace values in an element that allows multiple values (for example, <code>CNAME</code>), you must specify all of the values that you want to appear in the updated distribution. In addition, you must update the corresponding <code>Quantity</code> element.</p> </li> </ul> </important> </li> <li> <p>Submit an <code>UpdateDistribution</code> request to update the configuration for your distribution:</p> <ul> <li> <p>In the request body, include the XML document that you updated in Step 2. The request body must include an XML document with a <code>DistributionConfig</code> element.</p> </li> <li> <p>Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GetDistributionConfig</code> request in Step 1.</p> </li> </ul> </li> <li> <p>Review the response to the <code>UpdateDistribution</code> request to confirm that the configuration was successfully updated.</p> </li> <li> <p>Optional: Submit a <a href=\"https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html\">GetDistribution</a> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> </ol>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/distribution/{Id}/config", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDistribution20190326Response(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 493:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 494:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 495:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 496:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 497:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 498:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 499:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 501:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 505:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 506:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 507:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 508:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 509:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 510:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 511:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 512:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 513:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 514:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 515:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 516:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 517:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 518:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 519:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 520:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 521:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 522:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 523:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def update_field_level_encryption_config2019_03_26(self, request: operations.UpdateFieldLevelEncryptionConfig20190326Request) -> operations.UpdateFieldLevelEncryptionConfig20190326Response:
        r"""Update a field-level encryption configuration. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/field-level-encryption/{Id}/config", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFieldLevelEncryptionConfig20190326Response(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def update_field_level_encryption_profile2019_03_26(self, request: operations.UpdateFieldLevelEncryptionProfile20190326Request) -> operations.UpdateFieldLevelEncryptionProfile20190326Response:
        r"""Update a field-level encryption profile. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/field-level-encryption-profile/{Id}/config", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFieldLevelEncryptionProfile20190326Response(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def update_public_key2019_03_26(self, request: operations.UpdatePublicKey20190326Request) -> operations.UpdatePublicKey20190326Response:
        r"""Update public key information. Note that the only value you can change is the comment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/public-key/{Id}/config", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePublicKey20190326Response(status_code=r.status_code, content_type=content_type)
        
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

    
    def update_streaming_distribution2019_03_26(self, request: operations.UpdateStreamingDistribution20190326Request) -> operations.UpdateStreamingDistribution20190326Response:
        r"""Update a streaming distribution. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/2019-03-26/streaming-distribution/{Id}/config", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateStreamingDistribution20190326Response(status_code=r.status_code, content_type=content_type)
        
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
        elif r.status_code == 487:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 488:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 489:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 490:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 491:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 492:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    