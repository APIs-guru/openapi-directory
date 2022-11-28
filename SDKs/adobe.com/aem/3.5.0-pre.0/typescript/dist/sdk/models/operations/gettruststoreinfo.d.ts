import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTruststoreInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    truststoreInfo?: shared.TruststoreInfo;
    getTruststoreInfoDefaultApplicationJsonString?: string;
}
