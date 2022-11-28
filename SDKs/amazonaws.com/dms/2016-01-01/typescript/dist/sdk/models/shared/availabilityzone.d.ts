import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The name of an Availability Zone for use during database migration. <code>AvailabilityZone</code> is an optional parameter to the <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html"> <code>CreateReplicationInstance</code> </a> operation, and it’s value relates to the Amazon Web Services Region of an endpoint. For example, the availability zone of an endpoint in the us-east-1 region might be us-east-1a, us-east-1b, us-east-1c, or us-east-1d.
**/
export declare class AvailabilityZone extends SpeakeasyBase {
    name?: string;
}
