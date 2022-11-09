import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Environment } from "./environment";


export class GetEnvironmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: Environment;
}
