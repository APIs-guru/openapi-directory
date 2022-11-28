import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectoryConfig } from "./directoryconfig";



export class DescribeDirectoryConfigsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryConfigs", elemType: DirectoryConfig })
  directoryConfigs?: DirectoryConfig[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
