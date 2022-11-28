# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { AssociateApprovalRuleTemplateWithRepositoryRequest, AssociateApprovalRuleTemplateWithRepositoryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateApprovalRuleTemplateWithRepositoryRequest = {
  headers: {
    xAmzAlgorithm: "cum",
    xAmzContentSha256: "a",
    xAmzCredential: "quo",
    xAmzDate: "delectus",
    xAmzSecurityToken: "et",
    xAmzSignature: "ipsum",
    xAmzSignedHeaders: "et",
    xAmzTarget: "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository",
  },
  request: {
    approvalRuleTemplateName: "et",
    repositoryName: "cupiditate",
  },
};

sdk.sdk.associateApprovalRuleTemplateWithRepository(req).then((res: AssociateApprovalRuleTemplateWithRepositoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateApprovalRuleTemplateWithRepository` - Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.
* `batchAssociateApprovalRuleTemplateWithRepositories` - Creates an association between an approval rule template and one or more specified repositories. 
* `batchDescribeMergeConflicts` - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.
* `batchDisassociateApprovalRuleTemplateFromRepositories` - Removes the association between an approval rule template and one or more specified repositories. 
* `batchGetCommits` - Returns information about the contents of one or more commits in a repository.
* `batchGetRepositories` - <p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* `createApprovalRuleTemplate` - Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.
* `createBranch` - <p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>
* `createCommit` - Creates a commit for a repository on the tip of a specified branch.
* `createPullRequest` - Creates a pull request in the specified repository.
* `createPullRequestApprovalRule` - Creates an approval rule for a pull request.
* `createRepository` - Creates a new, empty repository.
* `createUnreferencedMergeCommit` - <p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>
* `deleteApprovalRuleTemplate` - Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.
* `deleteBranch` - Deletes a branch from a repository, unless that branch is the default branch for the repository. 
* `deleteCommentContent` - Deletes the content of a comment made on a change, file, or commit in a repository.
* `deleteFile` - Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.
* `deletePullRequestApprovalRule` - Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.
* `deleteRepository` - <p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>
* `describeMergeConflicts` - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.
* `describePullRequestEvents` - Returns information about one or more pull request events.
* `disassociateApprovalRuleTemplateFromRepository` - Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.
* `evaluatePullRequestApprovalRules` - Evaluates whether a pull request has met all the conditions specified in its associated approval rules.
* `getApprovalRuleTemplate` - Returns information about a specified approval rule template.
* `getBlob` - Returns the base-64 encoded content of an individual blob in a repository.
* `getBranch` - Returns information about a repository branch, including its name and the last commit ID.
* `getComment` - <p>Returns the content of a comment made on a change, file, or commit in a repository. </p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* `getCommentReactions` - Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.
* `getCommentsForComparedCommit` - <p>Returns information about comments made on the comparison between two commits.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* `getCommentsForPullRequest` - <p>Returns comments made on a pull request.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
* `getCommit` - Returns information about a commit, including commit message and committer information.
* `getDifferences` - Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.
* `getFile` - Returns the base-64 encoded contents of a specified file and its metadata.
* `getFolder` - Returns the contents of a specified folder in a repository.
* `getMergeCommit` - Returns information about a specified merge commit.
* `getMergeConflicts` - Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.
* `getMergeOptions` - Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.
* `getPullRequest` - Gets information about a pull request in a specified repository.
* `getPullRequestApprovalStates` - Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.
* `getPullRequestOverrideState` - Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.
* `getRepository` - <p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* `getRepositoryTriggers` - Gets information about triggers configured for a repository.
* `listApprovalRuleTemplates` - Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.
* `listAssociatedApprovalRuleTemplatesForRepository` - Lists all approval rule templates that are associated with a specified repository.
* `listBranches` - Gets information about one or more branches in a repository.
* `listPullRequests` - Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.
* `listRepositories` - Gets information about one or more repositories.
* `listRepositoriesForApprovalRuleTemplate` - Lists all repositories associated with the specified approval rule template.
* `listTagsForResource` - Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.
* `mergeBranchesByFastForward` - Merges two branches using the fast-forward merge strategy.
* `mergeBranchesBySquash` - Merges two branches using the squash merge strategy.
* `mergeBranchesByThreeWay` - Merges two specified branches using the three-way merge strategy.
* `mergePullRequestByFastForward` - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.
* `mergePullRequestBySquash` - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.
* `mergePullRequestByThreeWay` - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.
* `overridePullRequestApprovalRules` - Sets aside (overrides) all approval rule requirements for a specified pull request.
* `postCommentForComparedCommit` - Posts a comment on the comparison between two commits.
* `postCommentForPullRequest` - Posts a comment on a pull request.
* `postCommentReply` - Posts a comment in reply to an existing comment on a comparison between commits or a pull request.
* `putCommentReaction` - Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.
* `putFile` - Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.
* `putRepositoryTriggers` - Replaces all triggers for a repository. Used to create or delete triggers.
* `tagResource` - Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
* `testRepositoryTriggers` - Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.
* `untagResource` - Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
* `updateApprovalRuleTemplateContent` - Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.
* `updateApprovalRuleTemplateDescription` - Updates the description for a specified approval rule template.
* `updateApprovalRuleTemplateName` - Updates the name of a specified approval rule template.
* `updateComment` - Replaces the contents of a comment.
* `updateDefaultBranch` - <p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>
* `updatePullRequestApprovalRuleContent` - Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers. 
* `updatePullRequestApprovalState` - Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.
* `updatePullRequestDescription` - Replaces the contents of the description of a pull request.
* `updatePullRequestStatus` - Updates the status of a pull request. 
* `updatePullRequestTitle` - Replaces the title of a pull request.
* `updateRepositoryDescription` - <p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
* `updateRepositoryName` - Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
