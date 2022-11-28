import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Directory } from "./directory";



export class GetDirectoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Directory" })
  directory: Directory;
}
