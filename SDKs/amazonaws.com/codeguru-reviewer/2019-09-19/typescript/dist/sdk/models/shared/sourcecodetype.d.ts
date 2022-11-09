import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BranchDiffSourceCodeType } from "./branchdiffsourcecodetype";
import { CommitDiffSourceCodeType } from "./commitdiffsourcecodetype";
import { RepositoryHeadSourceCodeType } from "./repositoryheadsourcecodetype";
import { RequestMetadata } from "./requestmetadata";
import { S3BucketRepository } from "./s3bucketrepository";
/**
 *  Specifies the source code that is analyzed in a code review.
**/
export declare class SourceCodeType extends SpeakeasyBase {
    branchDiff?: BranchDiffSourceCodeType;
    commitDiff?: CommitDiffSourceCodeType;
    repositoryHead?: RepositoryHeadSourceCodeType;
    requestMetadata?: RequestMetadata;
    s3BucketRepository?: S3BucketRepository;
}
