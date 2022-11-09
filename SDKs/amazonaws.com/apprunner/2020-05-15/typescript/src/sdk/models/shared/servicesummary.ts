import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceStatusEnum } from "./servicestatusenum";


// ServiceSummary
/** 
 * <p>Provides summary information for an AWS App Runner service.</p> <p>This type contains limited information about a service. It doesn't include configuration details. It's returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action. Complete service information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_Service.html">Service</a> type.</p>
**/
export class ServiceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=ServiceArn" })
  serviceArn?: string;

  @Metadata({ data: "json, name=ServiceId" })
  serviceId?: string;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=ServiceUrl" })
  serviceUrl?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ServiceStatusEnum;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
