import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateServicePrimaryTaskSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster: string;

  @SpeakeasyMetadata({ data: "json, name=primaryTaskSet" })
  primaryTaskSet: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: string;
}
