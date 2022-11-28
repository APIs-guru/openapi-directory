import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyHapgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HapgArn" })
  hapgArn?: string;
}
