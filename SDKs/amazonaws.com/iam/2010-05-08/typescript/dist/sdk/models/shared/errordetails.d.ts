import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains information about the reason that the operation failed.</p> <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
**/
export declare class ErrorDetails extends SpeakeasyBase {
    code: string;
    message: string;
}
