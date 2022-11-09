import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateServicePrimaryTaskSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster: string;

  @Metadata({ data: "json, name=primaryTaskSet" })
  primaryTaskSet: string;

  @Metadata({ data: "json, name=service" })
  service: string;
}
