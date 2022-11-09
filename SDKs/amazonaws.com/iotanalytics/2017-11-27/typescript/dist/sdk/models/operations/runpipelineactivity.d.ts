import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RunPipelineActivityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An activity that performs a transformation on a message.
**/
export declare class RunPipelineActivityRequestBodyPipelineActivity extends SpeakeasyBase {
    addAttributes?: shared.AddAttributesActivity;
    channel?: shared.ChannelActivity;
    datastore?: shared.DatastoreActivity;
    deviceRegistryEnrich?: shared.DeviceRegistryEnrichActivity;
    deviceShadowEnrich?: shared.DeviceShadowEnrichActivity;
    filter?: shared.FilterActivity;
    lambda?: shared.LambdaActivity;
    math?: shared.MathActivity;
    removeAttributes?: shared.RemoveAttributesActivity;
    selectAttributes?: shared.SelectAttributesActivity;
}
export declare class RunPipelineActivityRequestBody extends SpeakeasyBase {
    payloads: string[];
    pipelineActivity: RunPipelineActivityRequestBodyPipelineActivity;
}
export declare class RunPipelineActivityRequest extends SpeakeasyBase {
    headers: RunPipelineActivityHeaders;
    request: RunPipelineActivityRequestBody;
}
export declare class RunPipelineActivityResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    runPipelineActivityResponse?: shared.RunPipelineActivityResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
