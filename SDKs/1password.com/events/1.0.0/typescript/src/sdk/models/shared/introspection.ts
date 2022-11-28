import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Introspection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Features" })
  features?: string[];

  @SpeakeasyMetadata({ data: "json, name=IssuedAt" })
  issuedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=UUID" })
  uuid?: string;
}
