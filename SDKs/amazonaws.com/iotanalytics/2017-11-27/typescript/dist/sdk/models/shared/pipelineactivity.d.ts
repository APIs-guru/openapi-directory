import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * An activity that performs a transformation on a message.
**/
export declare class PipelineActivity extends SpeakeasyBase {
    addAttributes?: AddAttributesActivity;
    channel?: ChannelActivity;
    datastore?: DatastoreActivity;
    deviceRegistryEnrich?: DeviceRegistryEnrichActivity;
    deviceShadowEnrich?: DeviceShadowEnrichActivity;
    filter?: FilterActivity;
    lambda?: LambdaActivity;
    math?: MathActivity;
    removeAttributes?: RemoveAttributesActivity;
    selectAttributes?: SelectAttributesActivity;
}
