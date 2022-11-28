import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Directory } from "./directory";



export class ListDirectoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Directories", elemType: Directory })
  directories: Directory[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
