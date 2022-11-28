import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>An object that contains details about when a principal in the reported Organizations entity last attempted to access an Amazon Web Services service. A principal can be an IAM user, an IAM role, or the Amazon Web Services account root user within the reported Organizations entity.</p> <p>This data type is a response element in the <a>GetOrganizationsAccessReport</a> operation.</p>
**/
export declare class AccessDetail extends SpeakeasyBase {
    entityPath?: string;
    lastAuthenticatedTime?: Date;
    region?: string;
    serviceName: string;
    serviceNamespace: string;
    totalAuthenticatedEntities?: number;
}
