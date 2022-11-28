import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActivitiesDeleteActivityPathParams extends SpeakeasyBase {
    activityId: number;
}
export declare class ActivitiesDeleteActivityRequest extends SpeakeasyBase {
    pathParams: ActivitiesDeleteActivityPathParams;
}
export declare class ActivitiesDeleteActivityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
