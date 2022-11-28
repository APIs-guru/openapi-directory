import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SharedDirectory } from "./shareddirectory";



export class DescribeSharedDirectoriesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SharedDirectories", elemType: SharedDirectory })
  sharedDirectories?: SharedDirectory[];
}
