import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BranchDiffSourceCodeType } from "./branchdiffsourcecodetype";
import { CommitDiffSourceCodeType } from "./commitdiffsourcecodetype";
import { RepositoryHeadSourceCodeType } from "./repositoryheadsourcecodetype";
import { RequestMetadata } from "./requestmetadata";
import { S3BucketRepository } from "./s3bucketrepository";



// SourceCodeType
/** 
 *  Specifies the source code that is analyzed in a code review. 
**/
export class SourceCodeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BranchDiff" })
  branchDiff?: BranchDiffSourceCodeType;

  @SpeakeasyMetadata({ data: "json, name=CommitDiff" })
  commitDiff?: CommitDiffSourceCodeType;

  @SpeakeasyMetadata({ data: "json, name=RepositoryHead" })
  repositoryHead?: RepositoryHeadSourceCodeType;

  @SpeakeasyMetadata({ data: "json, name=RequestMetadata" })
  requestMetadata?: RequestMetadata;

  @SpeakeasyMetadata({ data: "json, name=S3BucketRepository" })
  s3BucketRepository?: S3BucketRepository;
}
