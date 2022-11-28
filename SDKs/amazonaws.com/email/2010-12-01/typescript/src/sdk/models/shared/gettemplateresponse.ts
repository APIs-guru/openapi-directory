import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Template } from "./template";



export class GetTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  template?: Template;
}
