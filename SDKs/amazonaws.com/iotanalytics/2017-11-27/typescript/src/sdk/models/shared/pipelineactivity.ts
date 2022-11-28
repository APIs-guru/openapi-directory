import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddAttributesActivity } from "./addattributesactivity";
import { ChannelActivity } from "./channelactivity";
import { DatastoreActivity } from "./datastoreactivity";
import { DeviceRegistryEnrichActivity } from "./deviceregistryenrichactivity";
import { DeviceShadowEnrichActivity } from "./deviceshadowenrichactivity";
import { FilterActivity } from "./filteractivity";
import { LambdaActivity } from "./lambdaactivity";
import { MathActivity } from "./mathactivity";
import { RemoveAttributesActivity } from "./removeattributesactivity";
import { SelectAttributesActivity } from "./selectattributesactivity";



// PipelineActivity
/** 
 * An activity that performs a transformation on a message.
**/
export class PipelineActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addAttributes" })
  addAttributes?: AddAttributesActivity;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: ChannelActivity;

  @SpeakeasyMetadata({ data: "json, name=datastore" })
  datastore?: DatastoreActivity;

  @SpeakeasyMetadata({ data: "json, name=deviceRegistryEnrich" })
  deviceRegistryEnrich?: DeviceRegistryEnrichActivity;

  @SpeakeasyMetadata({ data: "json, name=deviceShadowEnrich" })
  deviceShadowEnrich?: DeviceShadowEnrichActivity;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: FilterActivity;

  @SpeakeasyMetadata({ data: "json, name=lambda" })
  lambda?: LambdaActivity;

  @SpeakeasyMetadata({ data: "json, name=math" })
  math?: MathActivity;

  @SpeakeasyMetadata({ data: "json, name=removeAttributes" })
  removeAttributes?: RemoveAttributesActivity;

  @SpeakeasyMetadata({ data: "json, name=selectAttributes" })
  selectAttributes?: SelectAttributesActivity;
}
