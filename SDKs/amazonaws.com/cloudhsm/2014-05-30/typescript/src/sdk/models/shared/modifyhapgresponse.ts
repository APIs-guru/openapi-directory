import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifyHapgResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HapgArn" })
  hapgArn?: string;
}
