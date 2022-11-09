import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Introspection extends SpeakeasyBase {
  @Metadata({ data: "json, name=Features" })
  features?: string[];

  @Metadata({ data: "json, name=IssuedAt" })
  issuedAt?: Date;

  @Metadata({ data: "json, name=UUID" })
  uuid?: string;
}
