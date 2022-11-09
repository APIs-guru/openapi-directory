import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Directory } from "./directory";


export class ListDirectoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Directories", elemType: shared.Directory })
  directories: Directory[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
