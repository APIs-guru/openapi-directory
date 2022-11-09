import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Control } from "./control";


export class CreateControlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=control" })
  control?: Control;
}
