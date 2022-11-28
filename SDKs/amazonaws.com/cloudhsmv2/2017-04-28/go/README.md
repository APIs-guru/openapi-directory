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
    
    req := operations.CopyBackupToRegionRequest{
        Headers: operations.CopyBackupToRegionHeaders{
            XAmzAlgorithm: "maxime",
            XAmzContentSha256: "omnis",
            XAmzCredential: "dolor",
            XAmzDate: "non",
            XAmzSecurityToken: "veniam",
            XAmzSignature: "dolorem",
            XAmzSignedHeaders: "minima",
            XAmzTarget: "BaldrApiService.CopyBackupToRegion",
        },
        Request: shared.CopyBackupToRegionRequest{
            BackupID: "iste",
            DestinationRegion: "magni",
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "omnis",
                    Value: "iste",
                },
                shared.Tag{
                    Key: "unde",
                    Value: "adipisci",
                },
                shared.Tag{
                    Key: "impedit",
                    Value: "tempora",
                },
            },
        },
    }
    
    res, err := s.Sdk.CopyBackupToRegion(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyBackupToRegionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CopyBackupToRegion` - Copy an AWS CloudHSM cluster backup to a different region.
* `CreateCluster` - Creates a new AWS CloudHSM cluster.
* `CreateHsm` - Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.
* `DeleteBackup` - Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.
* `DeleteCluster` - Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.
* `DeleteHsm` - Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.
* `DescribeBackups` - <p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>
* `DescribeClusters` - <p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>
* `InitializeCluster` - Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.
* `ListTags` - <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>
* `ModifyBackupAttributes` - Modifies attributes for AWS CloudHSM backup.
* `ModifyCluster` - Modifies AWS CloudHSM cluster.
* `RestoreBackup` - Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.
* `TagResource` - Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.
* `UntagResource` - Removes the specified tag or tags from the specified AWS CloudHSM cluster.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
