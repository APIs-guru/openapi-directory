import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Queue extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxLength" })
  maxLength: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=ttl" })
  ttl: number;
}
