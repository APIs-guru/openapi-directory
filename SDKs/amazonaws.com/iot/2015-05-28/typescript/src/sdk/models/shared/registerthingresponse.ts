import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterThingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificatePem" })
  certificatePem?: string;

  @Metadata({ data: "json, name=resourceArns" })
  resourceArns?: Map<string, string>;
}
