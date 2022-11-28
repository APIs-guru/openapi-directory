import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://codecommit.{region}.amazonaws.com", "https://codecommit.{region}.amazonaws.com", "http://codecommit.{region}.amazonaws.com.cn", "https://codecommit.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * associateApprovalRuleTemplateWithRepository - Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.
    **/
    associateApprovalRuleTemplateWithRepository(req: operations.AssociateApprovalRuleTemplateWithRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.AssociateApprovalRuleTemplateWithRepositoryResponse>;
    /**
     * batchAssociateApprovalRuleTemplateWithRepositories - Creates an association between an approval rule template and one or more specified repositories.
    **/
    batchAssociateApprovalRuleTemplateWithRepositories(req: operations.BatchAssociateApprovalRuleTemplateWithRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.BatchAssociateApprovalRuleTemplateWithRepositoriesResponse>;
    /**
     * batchDescribeMergeConflicts - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.
    **/
    batchDescribeMergeConflicts(req: operations.BatchDescribeMergeConflictsRequest, config?: AxiosRequestConfig): Promise<operations.BatchDescribeMergeConflictsResponse>;
    /**
     * batchDisassociateApprovalRuleTemplateFromRepositories - Removes the association between an approval rule template and one or more specified repositories.
    **/
    batchDisassociateApprovalRuleTemplateFromRepositories(req: operations.BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse>;
    /**
     * batchGetCommits - Returns information about the contents of one or more commits in a repository.
    **/
    batchGetCommits(req: operations.BatchGetCommitsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetCommitsResponse>;
    /**
     * batchGetRepositories - <p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
    **/
    batchGetRepositories(req: operations.BatchGetRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetRepositoriesResponse>;
    /**
     * createApprovalRuleTemplate - Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.
    **/
    createApprovalRuleTemplate(req: operations.CreateApprovalRuleTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateApprovalRuleTemplateResponse>;
    /**
     * createBranch - <p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>
    **/
    createBranch(req: operations.CreateBranchRequest, config?: AxiosRequestConfig): Promise<operations.CreateBranchResponse>;
    /**
     * createCommit - Creates a commit for a repository on the tip of a specified branch.
    **/
    createCommit(req: operations.CreateCommitRequest, config?: AxiosRequestConfig): Promise<operations.CreateCommitResponse>;
    /**
     * createPullRequest - Creates a pull request in the specified repository.
    **/
    createPullRequest(req: operations.CreatePullRequestRequest, config?: AxiosRequestConfig): Promise<operations.CreatePullRequestResponse>;
    /**
     * createPullRequestApprovalRule - Creates an approval rule for a pull request.
    **/
    createPullRequestApprovalRule(req: operations.CreatePullRequestApprovalRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreatePullRequestApprovalRuleResponse>;
    /**
     * createRepository - Creates a new, empty repository.
    **/
    createRepository(req: operations.CreateRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryResponse>;
    /**
     * createUnreferencedMergeCommit - <p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>
    **/
    createUnreferencedMergeCommit(req: operations.CreateUnreferencedMergeCommitRequest, config?: AxiosRequestConfig): Promise<operations.CreateUnreferencedMergeCommitResponse>;
    /**
     * deleteApprovalRuleTemplate - Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.
    **/
    deleteApprovalRuleTemplate(req: operations.DeleteApprovalRuleTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApprovalRuleTemplateResponse>;
    /**
     * deleteBranch - Deletes a branch from a repository, unless that branch is the default branch for the repository.
    **/
    deleteBranch(req: operations.DeleteBranchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBranchResponse>;
    /**
     * deleteCommentContent - Deletes the content of a comment made on a change, file, or commit in a repository.
    **/
    deleteCommentContent(req: operations.DeleteCommentContentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCommentContentResponse>;
    /**
     * deleteFile - Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.
    **/
    deleteFile(req: operations.DeleteFileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFileResponse>;
    /**
     * deletePullRequestApprovalRule - Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.
    **/
    deletePullRequestApprovalRule(req: operations.DeletePullRequestApprovalRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeletePullRequestApprovalRuleResponse>;
    /**
     * deleteRepository - <p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>
    **/
    deleteRepository(req: operations.DeleteRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryResponse>;
    /**
     * describeMergeConflicts - Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.
    **/
    describeMergeConflicts(req: operations.DescribeMergeConflictsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMergeConflictsResponse>;
    /**
     * describePullRequestEvents - Returns information about one or more pull request events.
    **/
    describePullRequestEvents(req: operations.DescribePullRequestEventsRequest, config?: AxiosRequestConfig): Promise<operations.DescribePullRequestEventsResponse>;
    /**
     * disassociateApprovalRuleTemplateFromRepository - Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.
    **/
    disassociateApprovalRuleTemplateFromRepository(req: operations.DisassociateApprovalRuleTemplateFromRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateApprovalRuleTemplateFromRepositoryResponse>;
    /**
     * evaluatePullRequestApprovalRules - Evaluates whether a pull request has met all the conditions specified in its associated approval rules.
    **/
    evaluatePullRequestApprovalRules(req: operations.EvaluatePullRequestApprovalRulesRequest, config?: AxiosRequestConfig): Promise<operations.EvaluatePullRequestApprovalRulesResponse>;
    /**
     * getApprovalRuleTemplate - Returns information about a specified approval rule template.
    **/
    getApprovalRuleTemplate(req: operations.GetApprovalRuleTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetApprovalRuleTemplateResponse>;
    /**
     * getBlob - Returns the base-64 encoded content of an individual blob in a repository.
    **/
    getBlob(req: operations.GetBlobRequest, config?: AxiosRequestConfig): Promise<operations.GetBlobResponse>;
    /**
     * getBranch - Returns information about a repository branch, including its name and the last commit ID.
    **/
    getBranch(req: operations.GetBranchRequest, config?: AxiosRequestConfig): Promise<operations.GetBranchResponse>;
    /**
     * getComment - <p>Returns the content of a comment made on a change, file, or commit in a repository. </p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
    **/
    getComment(req: operations.GetCommentRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentResponse>;
    /**
     * getCommentReactions - Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.
    **/
    getCommentReactions(req: operations.GetCommentReactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentReactionsResponse>;
    /**
     * getCommentsForComparedCommit - <p>Returns information about comments made on the comparison between two commits.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
    **/
    getCommentsForComparedCommit(req: operations.GetCommentsForComparedCommitRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentsForComparedCommitResponse>;
    /**
     * getCommentsForPullRequest - <p>Returns comments made on a pull request.</p> <note> <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</p> </note>
    **/
    getCommentsForPullRequest(req: operations.GetCommentsForPullRequestRequest, config?: AxiosRequestConfig): Promise<operations.GetCommentsForPullRequestResponse>;
    /**
     * getCommit - Returns information about a commit, including commit message and committer information.
    **/
    getCommit(req: operations.GetCommitRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitResponse>;
    /**
     * getDifferences - Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.
    **/
    getDifferences(req: operations.GetDifferencesRequest, config?: AxiosRequestConfig): Promise<operations.GetDifferencesResponse>;
    /**
     * getFile - Returns the base-64 encoded contents of a specified file and its metadata.
    **/
    getFile(req: operations.GetFileRequest, config?: AxiosRequestConfig): Promise<operations.GetFileResponse>;
    /**
     * getFolder - Returns the contents of a specified folder in a repository.
    **/
    getFolder(req: operations.GetFolderRequest, config?: AxiosRequestConfig): Promise<operations.GetFolderResponse>;
    /**
     * getMergeCommit - Returns information about a specified merge commit.
    **/
    getMergeCommit(req: operations.GetMergeCommitRequest, config?: AxiosRequestConfig): Promise<operations.GetMergeCommitResponse>;
    /**
     * getMergeConflicts - Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.
    **/
    getMergeConflicts(req: operations.GetMergeConflictsRequest, config?: AxiosRequestConfig): Promise<operations.GetMergeConflictsResponse>;
    /**
     * getMergeOptions - Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.
    **/
    getMergeOptions(req: operations.GetMergeOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetMergeOptionsResponse>;
    /**
     * getPullRequest - Gets information about a pull request in a specified repository.
    **/
    getPullRequest(req: operations.GetPullRequestRequest, config?: AxiosRequestConfig): Promise<operations.GetPullRequestResponse>;
    /**
     * getPullRequestApprovalStates - Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.
    **/
    getPullRequestApprovalStates(req: operations.GetPullRequestApprovalStatesRequest, config?: AxiosRequestConfig): Promise<operations.GetPullRequestApprovalStatesResponse>;
    /**
     * getPullRequestOverrideState - Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.
    **/
    getPullRequestOverrideState(req: operations.GetPullRequestOverrideStateRequest, config?: AxiosRequestConfig): Promise<operations.GetPullRequestOverrideStateResponse>;
    /**
     * getRepository - <p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
    **/
    getRepository(req: operations.GetRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryResponse>;
    /**
     * getRepositoryTriggers - Gets information about triggers configured for a repository.
    **/
    getRepositoryTriggers(req: operations.GetRepositoryTriggersRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryTriggersResponse>;
    /**
     * listApprovalRuleTemplates - Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.
    **/
    listApprovalRuleTemplates(req: operations.ListApprovalRuleTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListApprovalRuleTemplatesResponse>;
    /**
     * listAssociatedApprovalRuleTemplatesForRepository - Lists all approval rule templates that are associated with a specified repository.
    **/
    listAssociatedApprovalRuleTemplatesForRepository(req: operations.ListAssociatedApprovalRuleTemplatesForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociatedApprovalRuleTemplatesForRepositoryResponse>;
    /**
     * listBranches - Gets information about one or more branches in a repository.
    **/
    listBranches(req: operations.ListBranchesRequest, config?: AxiosRequestConfig): Promise<operations.ListBranchesResponse>;
    /**
     * listPullRequests - Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.
    **/
    listPullRequests(req: operations.ListPullRequestsRequest, config?: AxiosRequestConfig): Promise<operations.ListPullRequestsResponse>;
    /**
     * listRepositories - Gets information about one or more repositories.
    **/
    listRepositories(req: operations.ListRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListRepositoriesResponse>;
    /**
     * listRepositoriesForApprovalRuleTemplate - Lists all repositories associated with the specified approval rule template.
    **/
    listRepositoriesForApprovalRuleTemplate(req: operations.ListRepositoriesForApprovalRuleTemplateRequest, config?: AxiosRequestConfig): Promise<operations.ListRepositoriesForApprovalRuleTemplateResponse>;
    /**
     * listTagsForResource - Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * mergeBranchesByFastForward - Merges two branches using the fast-forward merge strategy.
    **/
    mergeBranchesByFastForward(req: operations.MergeBranchesByFastForwardRequest, config?: AxiosRequestConfig): Promise<operations.MergeBranchesByFastForwardResponse>;
    /**
     * mergeBranchesBySquash - Merges two branches using the squash merge strategy.
    **/
    mergeBranchesBySquash(req: operations.MergeBranchesBySquashRequest, config?: AxiosRequestConfig): Promise<operations.MergeBranchesBySquashResponse>;
    /**
     * mergeBranchesByThreeWay - Merges two specified branches using the three-way merge strategy.
    **/
    mergeBranchesByThreeWay(req: operations.MergeBranchesByThreeWayRequest, config?: AxiosRequestConfig): Promise<operations.MergeBranchesByThreeWayResponse>;
    /**
     * mergePullRequestByFastForward - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.
    **/
    mergePullRequestByFastForward(req: operations.MergePullRequestByFastForwardRequest, config?: AxiosRequestConfig): Promise<operations.MergePullRequestByFastForwardResponse>;
    /**
     * mergePullRequestBySquash - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.
    **/
    mergePullRequestBySquash(req: operations.MergePullRequestBySquashRequest, config?: AxiosRequestConfig): Promise<operations.MergePullRequestBySquashResponse>;
    /**
     * mergePullRequestByThreeWay - Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.
    **/
    mergePullRequestByThreeWay(req: operations.MergePullRequestByThreeWayRequest, config?: AxiosRequestConfig): Promise<operations.MergePullRequestByThreeWayResponse>;
    /**
     * overridePullRequestApprovalRules - Sets aside (overrides) all approval rule requirements for a specified pull request.
    **/
    overridePullRequestApprovalRules(req: operations.OverridePullRequestApprovalRulesRequest, config?: AxiosRequestConfig): Promise<operations.OverridePullRequestApprovalRulesResponse>;
    /**
     * postCommentForComparedCommit - Posts a comment on the comparison between two commits.
    **/
    postCommentForComparedCommit(req: operations.PostCommentForComparedCommitRequest, config?: AxiosRequestConfig): Promise<operations.PostCommentForComparedCommitResponse>;
    /**
     * postCommentForPullRequest - Posts a comment on a pull request.
    **/
    postCommentForPullRequest(req: operations.PostCommentForPullRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostCommentForPullRequestResponse>;
    /**
     * postCommentReply - Posts a comment in reply to an existing comment on a comparison between commits or a pull request.
    **/
    postCommentReply(req: operations.PostCommentReplyRequest, config?: AxiosRequestConfig): Promise<operations.PostCommentReplyResponse>;
    /**
     * putCommentReaction - Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.
    **/
    putCommentReaction(req: operations.PutCommentReactionRequest, config?: AxiosRequestConfig): Promise<operations.PutCommentReactionResponse>;
    /**
     * putFile - Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.
    **/
    putFile(req: operations.PutFileRequest, config?: AxiosRequestConfig): Promise<operations.PutFileResponse>;
    /**
     * putRepositoryTriggers - Replaces all triggers for a repository. Used to create or delete triggers.
    **/
    putRepositoryTriggers(req: operations.PutRepositoryTriggersRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoryTriggersResponse>;
    /**
     * tagResource - Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * testRepositoryTriggers - Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.
    **/
    testRepositoryTriggers(req: operations.TestRepositoryTriggersRequest, config?: AxiosRequestConfig): Promise<operations.TestRepositoryTriggersResponse>;
    /**
     * untagResource - Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateApprovalRuleTemplateContent - Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.
    **/
    updateApprovalRuleTemplateContent(req: operations.UpdateApprovalRuleTemplateContentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApprovalRuleTemplateContentResponse>;
    /**
     * updateApprovalRuleTemplateDescription - Updates the description for a specified approval rule template.
    **/
    updateApprovalRuleTemplateDescription(req: operations.UpdateApprovalRuleTemplateDescriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApprovalRuleTemplateDescriptionResponse>;
    /**
     * updateApprovalRuleTemplateName - Updates the name of a specified approval rule template.
    **/
    updateApprovalRuleTemplateName(req: operations.UpdateApprovalRuleTemplateNameRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApprovalRuleTemplateNameResponse>;
    /**
     * updateComment - Replaces the contents of a comment.
    **/
    updateComment(req: operations.UpdateCommentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCommentResponse>;
    /**
     * updateDefaultBranch - <p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>
    **/
    updateDefaultBranch(req: operations.UpdateDefaultBranchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDefaultBranchResponse>;
    /**
     * updatePullRequestApprovalRuleContent - Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers.
    **/
    updatePullRequestApprovalRuleContent(req: operations.UpdatePullRequestApprovalRuleContentRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePullRequestApprovalRuleContentResponse>;
    /**
     * updatePullRequestApprovalState - Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.
    **/
    updatePullRequestApprovalState(req: operations.UpdatePullRequestApprovalStateRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePullRequestApprovalStateResponse>;
    /**
     * updatePullRequestDescription - Replaces the contents of the description of a pull request.
    **/
    updatePullRequestDescription(req: operations.UpdatePullRequestDescriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePullRequestDescriptionResponse>;
    /**
     * updatePullRequestStatus - Updates the status of a pull request.
    **/
    updatePullRequestStatus(req: operations.UpdatePullRequestStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePullRequestStatusResponse>;
    /**
     * updatePullRequestTitle - Replaces the title of a pull request.
    **/
    updatePullRequestTitle(req: operations.UpdatePullRequestTitleRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePullRequestTitleResponse>;
    /**
     * updateRepositoryDescription - <p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
    **/
    updateRepositoryDescription(req: operations.UpdateRepositoryDescriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryDescriptionResponse>;
    /**
     * updateRepositoryName - Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.
    **/
    updateRepositoryName(req: operations.UpdateRepositoryNameRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryNameResponse>;
}
export {};
