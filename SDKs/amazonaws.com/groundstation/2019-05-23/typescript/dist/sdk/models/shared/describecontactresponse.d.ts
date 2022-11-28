import { SpeakeasyBase } from "../../../internal/utils";
import { ContactStatusEnum } from "./contactstatusenum";
import { DataflowDetail } from "./dataflowdetail";
import { Elevation } from "./elevation";
/**
 * <p/>
**/
export declare class DescribeContactResponse extends SpeakeasyBase {
    contactId?: string;
    contactStatus?: ContactStatusEnum;
    dataflowList?: DataflowDetail[];
    endTime?: Date;
    errorMessage?: string;
    groundStation?: string;
    maximumElevation?: Elevation;
    missionProfileArn?: string;
    postPassEndTime?: Date;
    prePassStartTime?: Date;
    region?: string;
    satelliteArn?: string;
    startTime?: Date;
    tags?: Map<string, string>;
}
