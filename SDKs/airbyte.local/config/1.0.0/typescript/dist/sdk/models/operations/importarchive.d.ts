import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ImportArchiveRequest extends SpeakeasyBase {
    request: Uint8Array;
}
export declare class ImportArchiveResponse extends SpeakeasyBase {
    contentType: string;
    importRead?: shared.ImportRead;
    statusCode: number;
}
