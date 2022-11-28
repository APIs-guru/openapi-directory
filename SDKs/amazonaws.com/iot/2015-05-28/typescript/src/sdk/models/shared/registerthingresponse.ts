import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterThingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificatePem" })
  certificatePem?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceArns" })
  resourceArns?: Map<string, string>;
}
