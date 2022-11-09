import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SharedDirectory } from "./shareddirectory";


export class DescribeSharedDirectoriesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SharedDirectories", elemType: shared.SharedDirectory })
  sharedDirectories?: SharedDirectory[];
}
