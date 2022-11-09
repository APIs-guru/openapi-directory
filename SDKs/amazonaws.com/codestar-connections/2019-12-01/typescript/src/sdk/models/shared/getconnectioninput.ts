import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConnectionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn: string;
}
