import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsPutJobPathParams extends SpeakeasyBase {
    jobId: number;
}
export declare class JobsPutJobRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoJob?: shared.BuildSystemSharedDtoJobInput;
    buildSystemSharedDtoJob1?: shared.BuildSystemSharedDtoJobInput;
    buildSystemSharedDtoJob2?: shared.BuildSystemSharedDtoJobInput;
    textXml: Uint8Array;
}
export declare class JobsPutJobRequest extends SpeakeasyBase {
    pathParams: JobsPutJobPathParams;
    request: JobsPutJobRequestsInput;
}
export declare class JobsPutJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
