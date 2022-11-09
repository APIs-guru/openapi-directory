import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DirectoryConfig } from "./directoryconfig";


export class DescribeDirectoryConfigsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryConfigs", elemType: shared.DirectoryConfig })
  directoryConfigs?: DirectoryConfig[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
