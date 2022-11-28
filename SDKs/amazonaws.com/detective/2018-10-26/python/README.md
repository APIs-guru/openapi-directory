# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AcceptInvitationRequest(
    headers=operations.AcceptInvitationHeaders(
        x_amz_algorithm="sit",
        x_amz_content_sha256="repellat",
        x_amz_credential="non",
        x_amz_date="facilis",
        x_amz_security_token="id",
        x_amz_signature="reprehenderit",
        x_amz_signed_headers="sit",
    ),
    request=operations.AcceptInvitationRequestBody(
        graph_arn="at",
    ),
)
    
res = s.sdk.accept_invitation(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `accept_invitation` - <p>Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. </p> <p>The request provides the ARN of behavior graph.</p> <p>The member account status in the graph must be <code>INVITED</code>.</p>
* `create_graph` - <p>Creates a new behavior graph for the calling account, and sets that account as the administrator account. This operation is called by the account that is enabling Detective.</p> <p>Before you try to enable Detective, make sure that your account has been enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable Detective, it checks whether your data volume is within the Detective quota. If it exceeds the quota, then you cannot enable Detective. </p> <p>The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph.</p> <p> <code>CreateGraph</code> triggers a process to create the corresponding data tables for the new behavior graph.</p> <p>An account can only be the administrator account for one behavior graph within a Region. If the same account calls <code>CreateGraph</code> with the same administrator account, it always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
* `create_members` - <p>Sends a request to invite the specified AWS accounts to be member accounts in the behavior graph. This operation can only be called by the administrator account for a behavior graph. </p> <p> <code>CreateMembers</code> verifies the accounts and then invites the verified accounts. The administrator can optionally specify to not send invitation emails to the member accounts. This would be used when the administrator manages their member accounts centrally.</p> <p>The request provides the behavior graph ARN and the list of accounts to invite.</p> <p>The response separates the requested accounts into two lists:</p> <ul> <li> <p>The accounts that <code>CreateMembers</code> was able to start the verification for. This list includes member accounts that are being verified, that have passed verification and are to be invited, and that have failed verification.</p> </li> <li> <p>The accounts that <code>CreateMembers</code> was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.</p> </li> </ul>
* `delete_graph` - <p>Disables the specified behavior graph and queues it to be deleted. This operation removes the graph from each member account's list of behavior graphs.</p> <p> <code>DeleteGraph</code> can only be called by the administrator account for a behavior graph.</p>
* `delete_members` - Deletes one or more member accounts from the administrator account's behavior graph. This operation can only be called by a Detective administrator account. That account cannot use <code>DeleteMembers</code> to delete their own account from the behavior graph. To disable a behavior graph, the administrator account uses the <code>DeleteGraph</code> API method.
* `disassociate_membership` - Removes the member account from the specified behavior graph. This operation can only be called by a member account that has the <code>ENABLED</code> status.
* `get_members` - Returns the membership details for specified member accounts for a behavior graph.
* `list_graphs` - <p>Returns the list of behavior graphs that the calling account is an administrator account of. This operation can only be called by an administrator account.</p> <p>Because an account can currently only be the administrator of one behavior graph within a Region, the results always contain a single behavior graph.</p>
* `list_invitations` - <p>Retrieves the list of open and accepted behavior graph invitations for the member account. This operation can only be called by a member account.</p> <p>Open invitations are invitations that the member account has not responded to.</p> <p>The results do not include behavior graphs for which the member account declined the invitation. The results also do not include behavior graphs that the member account resigned from or was removed from.</p>
* `list_members` - Retrieves the list of member accounts for a behavior graph. Does not return member accounts that were removed from the behavior graph.
* `list_tags_for_resource` - Returns the tag values that are assigned to a behavior graph.
* `reject_invitation` - Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by a member account that has the <code>INVITED</code> status.
* `start_monitoring_member` - <p>Sends a request to enable data ingest for a member account that has a status of <code>ACCEPTED_BUT_DISABLED</code>.</p> <p>For valid member accounts, the status is updated as follows.</p> <ul> <li> <p>If Detective enabled the member account, then the new status is <code>ENABLED</code>.</p> </li> <li> <p>If Detective cannot enable the member account, the status remains <code>ACCEPTED_BUT_DISABLED</code>. </p> </li> </ul>
* `tag_resource` - Applies tag values to a behavior graph.
* `untag_resource` - Removes tags from a behavior graph.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
