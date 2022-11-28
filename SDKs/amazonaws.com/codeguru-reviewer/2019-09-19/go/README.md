# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AssociateRepositoryRequest{
        Headers: operations.AssociateRepositoryHeaders{
            XAmzAlgorithm: "id",
            XAmzContentSha256: "repellat",
            XAmzCredential: "repellendus",
            XAmzDate: "numquam",
            XAmzSecurityToken: "aspernatur",
            XAmzSignature: "ad",
            XAmzSignedHeaders: "velit",
        },
        Request: operations.AssociateRepositoryRequestBody{
            ClientRequestToken: "distinctio",
            KmsKeyDetails: &operations.AssociateRepositoryRequestBodyKmsKeyDetails{
                EncryptionOption: "AWS_OWNED_CMK",
                KmsKeyID: "ad",
            },
            Repository: operations.AssociateRepositoryRequestBodyRepository{
                Bitbucket: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "error",
                    Name: "enim",
                    Owner: "necessitatibus",
                },
                CodeCommit: &shared.CodeCommitRepository{
                    Name: "non",
                },
                GitHubEnterpriseServer: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "nam",
                    Name: "in",
                    Owner: "eum",
                },
                S3Bucket: &shared.S3Repository{
                    BucketName: "hic",
                    Name: "ut",
                },
            },
            Tags: map[string]string{
                "odio": "voluptate",
                "velit": "commodi",
                "iste": "vero",
            },
        },
    }
    
    res, err := s.Sdk.AssociateRepository(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateRepositoryResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AssociateRepository` - <p> Use to associate an Amazon Web Services CodeCommit repository or a repostory managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p> You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>
* `CreateCodeReview` -  Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html"> <code>CodeReviewType</code> </a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request. 
* `DescribeCodeReview` -  Returns the metadata associated with the code review along with its status.
* `DescribeRecommendationFeedback` -  Describes the customer feedback for a CodeGuru Reviewer recommendation. 
* `DescribeRepositoryAssociation` -  Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html"> <code>RepositoryAssociation</code> </a> object that contains information about the requested repository association. 
* `DisassociateRepository` - Removes the association between Amazon CodeGuru Reviewer and a repository.
* `ListCodeReviews` -  Lists all the code reviews that the customer has created in the past 90 days. 
* `ListRecommendationFeedback` -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html"> <code>RecommendationFeedbackSummary</code> </a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users. 
* `ListRecommendations` -  Returns the list of all recommendations for a completed code review. 
* `ListRepositoryAssociations` -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html"> <code>RepositoryAssociationSummary</code> </a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType"> <code>ProviderType</code> </a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name"> <code>Name</code> </a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State"> <code>State</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner"> <code>Owner</code> </a>. 
* `ListTagsForResource` - Returns the list of tags associated with an associated repository resource.
* `PutRecommendationFeedback` -  Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten. 
* `TagResource` - Adds one or more tags to an associated repository.
* `UntagResource` - Removes a tag from an associated repository.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
