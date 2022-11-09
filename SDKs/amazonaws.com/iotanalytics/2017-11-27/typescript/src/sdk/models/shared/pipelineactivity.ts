import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=addAttributes" })
  addAttributes?: AddAttributesActivity;

  @Metadata({ data: "json, name=channel" })
  channel?: ChannelActivity;

  @Metadata({ data: "json, name=datastore" })
  datastore?: DatastoreActivity;

  @Metadata({ data: "json, name=deviceRegistryEnrich" })
  deviceRegistryEnrich?: DeviceRegistryEnrichActivity;

  @Metadata({ data: "json, name=deviceShadowEnrich" })
  deviceShadowEnrich?: DeviceShadowEnrichActivity;

  @Metadata({ data: "json, name=filter" })
  filter?: FilterActivity;

  @Metadata({ data: "json, name=lambda" })
  lambda?: LambdaActivity;

  @Metadata({ data: "json, name=math" })
  math?: MathActivity;

  @Metadata({ data: "json, name=removeAttributes" })
  removeAttributes?: RemoveAttributesActivity;

  @Metadata({ data: "json, name=selectAttributes" })
  selectAttributes?: SelectAttributesActivity;
}
