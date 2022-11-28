import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceMetadataOptionsResponse } from "./instancemetadataoptionsresponse";



export class ModifyInstanceMetadataOptionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  instanceMetadataOptions?: InstanceMetadataOptionsResponse;
}
