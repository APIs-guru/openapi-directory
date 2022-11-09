import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Directory } from "./directory";


export class GetDirectoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Directory" })
  directory: Directory;
}
