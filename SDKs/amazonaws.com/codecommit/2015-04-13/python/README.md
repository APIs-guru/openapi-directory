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
    
req = operations.AssociateApprovalRuleTemplateWithRepositoryRequest(
    headers=operations.AssociateApprovalRuleTemplateWithRepositoryHeaders(
        x_amz_algorithm="cum",
        x_amz_content_sha256="a",
        x_amz_credential="quo",
        x_amz_date="delectus",
        x_amz_security_token="et",
        x_amz_signature="ipsum",
        x_amz_signed_headers="et",
        x_amz_target="CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository",
    ),
    request=shared.AssociateApprovalRuleTemplateWithRepositoryInput(
        approval_rule_template_name="et",
        repository_name="cupiditate",
    ),
)
    
res = s.sdk.associate_approval_rule_template_with_repository(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associate_approval_rule_template_with_repository` - Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.
* `batch_associate_approval_rule_template_with_repositories` - Creates an association between an approval rule template and one or more specified repositories. 
* `batch_describe_merge_conflicts` - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.
* `batch_disassociate_approval_rule_template_from_repositories` - Removes the association between an approval rule template and one or more specified repositories. 
* `batch_get_commits` - Returns information about the contents of one or more commits in a repository.
* `batch_get_repositories` - <p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* `create_approval_rule_template` - Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.
* `create_branch` - <p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>
* `create_commit` - Creates a commit for a repository on the tip of a specified branch.
* `create_pull_request` - Creates a pull request in the specified repository.
* `create_pull_request_approval_rule` - Creates an approval rule for a pull request.
* `create_repository` - Creates a new, empty repository.
* `create_unreferenced_merge_commit` - <p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>
* `delete_approval_rule_template` - Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.
* `delete_branch` - Deletes a branch from a repository, unless that branch is the default branch for the repository. 
* `delete_comment_content` - Deletes the content of a comment made on a change, file, or commit in a repository.
* `delete_file` - Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.
* `delete_pull_request_approval_rule` - Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.
* `delete_repository` - <p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>
* `describe_merge_conflicts` - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.
* `describe_pull_request_events` - Returns information about one or more pull request events.
* `disassociate_approval_rule_template_from_repository` - Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.
* `evaluate_pull_request_approval_rules` - Evaluates whether a pull request has met all the conditions specified in its associated approval rules.
* `get_approval_rule_template` - Returns information about a specified approval rule template.
* `get_blob` - Returns the base-64 encoded content of an individual blob in a repository.
* `get_branch` - Returns information about a repository branch, including its name and the last commit ID.
* `get_comment` - <p>Returns the content of a comment made on a change, file, or commit in a repository. </p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* `get_comment_reactions` - Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.
* `get_comments_for_compared_commit` - <p>Returns information about comments made on the comparison between two commits.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* `get_comments_for_pull_request` - <p>Returns comments made on a pull request.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* `get_commit` - Returns information about a commit, including commit message and committer information.
* `get_differences` - Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.
* `get_file` - Returns the base-64 encoded contents of a specified file and its metadata.
* `get_folder` - Returns the contents of a specified folder in a repository.
* `get_merge_commit` - Returns information about a specified merge commit.
* `get_merge_conflicts` - Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.
* `get_merge_options` - Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.
* `get_pull_request` - Gets information about a pull request in a specified repository.
* `get_pull_request_approval_states` - Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.
* `get_pull_request_override_state` - Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.
* `get_repository` - <p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* `get_repository_triggers` - Gets information about triggers configured for a repository.
* `list_approval_rule_templates` - Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.
* `list_associated_approval_rule_templates_for_repository` - Lists all approval rule templates that are associated with a specified repository.
* `list_branches` - Gets information about one or more branches in a repository.
* `list_pull_requests` - Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.
* `list_repositories` - Gets information about one or more repositories.
* `list_repositories_for_approval_rule_template` - Lists all repositories associated with the specified approval rule template.
* `list_tags_for_resource` - Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.
* `merge_branches_by_fast_forward` - Merges two branches using the fast-forward merge strategy.
* `merge_branches_by_squash` - Merges two branches using the squash merge strategy.
* `merge_branches_by_three_way` - Merges two specified branches using the three-way merge strategy.
* `merge_pull_request_by_fast_forward` - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.
* `merge_pull_request_by_squash` - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.
* `merge_pull_request_by_three_way` - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.
* `override_pull_request_approval_rules` - Sets aside (overrides) all approval rule requirements for a specified pull request.
* `post_comment_for_compared_commit` - Posts a comment on the comparison between two commits.
* `post_comment_for_pull_request` - Posts a comment on a pull request.
* `post_comment_reply` - Posts a comment in reply to an existing comment on a comparison between commits or a pull request.
* `put_comment_reaction` - Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.
* `put_file` - Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.
* `put_repository_triggers` - Replaces all triggers for a repository. Used to create or delete triggers.
* `tag_resource` - Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
* `test_repository_triggers` - Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.
* `untag_resource` - Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
* `update_approval_rule_template_content` - Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.
* `update_approval_rule_template_description` - Updates the description for a specified approval rule template.
* `update_approval_rule_template_name` - Updates the name of a specified approval rule template.
* `update_comment` - Replaces the contents of a comment.
* `update_default_branch` - <p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>
* `update_pull_request_approval_rule_content` - Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers. 
* `update_pull_request_approval_state` - Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.
* `update_pull_request_description` - Replaces the contents of the description of a pull request.
* `update_pull_request_status` - Updates the status of a pull request. 
* `update_pull_request_title` - Replaces the title of a pull request.
* `update_repository_description` - <p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* `update_repository_name` - Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
