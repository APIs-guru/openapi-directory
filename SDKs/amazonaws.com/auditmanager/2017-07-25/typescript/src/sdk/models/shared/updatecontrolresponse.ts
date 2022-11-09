import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Control } from "./control";


export class UpdateControlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=control" })
  control?: Control;
}
