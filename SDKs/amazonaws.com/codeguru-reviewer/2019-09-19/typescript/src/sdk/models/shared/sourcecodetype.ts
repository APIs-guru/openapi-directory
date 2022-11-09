import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=BranchDiff" })
  branchDiff?: BranchDiffSourceCodeType;

  @Metadata({ data: "json, name=CommitDiff" })
  commitDiff?: CommitDiffSourceCodeType;

  @Metadata({ data: "json, name=RepositoryHead" })
  repositoryHead?: RepositoryHeadSourceCodeType;

  @Metadata({ data: "json, name=RequestMetadata" })
  requestMetadata?: RequestMetadata;

  @Metadata({ data: "json, name=S3BucketRepository" })
  s3BucketRepository?: S3BucketRepository;
}
