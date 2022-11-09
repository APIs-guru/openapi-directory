import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceStatusEnum } from "./servicestatusenum";
/**
 * <p>Provides summary information for an AWS App Runner service.</p> <p>This type contains limited information about a service. It doesn't include configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action. Complete service information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_Service.html">Service</a> type.</p>
**/
export declare class ServiceSummary extends SpeakeasyBase {
    createdAt?: Date;
    serviceArn?: string;
    serviceId?: string;
    serviceName?: string;
    serviceUrl?: string;
    status?: ServiceStatusEnum;
    updatedAt?: Date;
}
