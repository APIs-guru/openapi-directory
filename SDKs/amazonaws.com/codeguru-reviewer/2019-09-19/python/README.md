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
    
req = operations.AssociateRepositoryRequest(
    headers=operations.AssociateRepositoryHeaders(
        x_amz_algorithm="id",
        x_amz_content_sha256="repellat",
        x_amz_credential="repellendus",
        x_amz_date="numquam",
        x_amz_security_token="aspernatur",
        x_amz_signature="ad",
        x_amz_signed_headers="velit",
    ),
    request=operations.AssociateRepositoryRequestBody(
        client_request_token="distinctio",
        kms_key_details=operations.AssociateRepositoryRequestBodyKmsKeyDetails(
            encryption_option="AWS_OWNED_CMK",
            kms_key_id="ad",
        ),
        repository=operations.AssociateRepositoryRequestBodyRepository(
            bitbucket=shared.ThirdPartySourceRepository(
                connection_arn="error",
                name="enim",
                owner="necessitatibus",
            ),
            code_commit=shared.CodeCommitRepository(
                name="non",
            ),
            git_hub_enterprise_server=shared.ThirdPartySourceRepository(
                connection_arn="nam",
                name="in",
                owner="eum",
            ),
            s3_bucket=shared.S3Repository(
                bucket_name="hic",
                name="ut",
            ),
        ),
        tags={
            "odio": "voluptate",
            "velit": "commodi",
            "iste": "vero",
        },
    ),
)
    
res = s.sdk.associate_repository(req)

if res.associate_repository_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associate_repository` - <p> Use to associate an Amazon Web Services CodeCommit repository or a repostory managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p> You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>
* `create_code_review` -  Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html"> <code>CodeReviewType</code> </a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request. 
* `describe_code_review` -  Returns the metadata associated with the code review along with its status.
* `describe_recommendation_feedback` -  Describes the customer feedback for a CodeGuru Reviewer recommendation. 
* `describe_repository_association` -  Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html"> <code>RepositoryAssociation</code> </a> object that contains information about the requested repository association. 
* `disassociate_repository` - Removes the association between Amazon CodeGuru Reviewer and a repository.
* `list_code_reviews` -  Lists all the code reviews that the customer has created in the past 90 days. 
* `list_recommendation_feedback` -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html"> <code>RecommendationFeedbackSummary</code> </a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users. 
* `list_recommendations` -  Returns the list of all recommendations for a completed code review. 
* `list_repository_associations` -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html"> <code>RepositoryAssociationSummary</code> </a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType"> <code>ProviderType</code> </a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name"> <code>Name</code> </a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State"> <code>State</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner"> <code>Owner</code> </a>. 
* `list_tags_for_resource` - Returns the list of tags associated with an associated repository resource.
* `put_recommendation_feedback` -  Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten. 
* `tag_resource` - Adds one or more tags to an associated repository.
* `untag_resource` - Removes a tag from an associated repository.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
