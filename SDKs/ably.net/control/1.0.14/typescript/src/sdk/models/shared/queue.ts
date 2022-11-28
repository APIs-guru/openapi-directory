import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Queue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxLength" })
  maxLength: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl: number;
}
