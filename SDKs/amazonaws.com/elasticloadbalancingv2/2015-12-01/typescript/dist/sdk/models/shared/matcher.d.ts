import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
**/
export declare class Matcher extends SpeakeasyBase {
    grpcCode?: string;
    httpCode?: string;
}
