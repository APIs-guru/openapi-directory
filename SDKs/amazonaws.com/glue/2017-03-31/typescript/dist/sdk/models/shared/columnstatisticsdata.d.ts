import { SpeakeasyBase } from "../../../internal/utils";
import { BinaryColumnStatisticsData } from "./binarycolumnstatisticsdata";
import { BooleanColumnStatisticsData } from "./booleancolumnstatisticsdata";
import { DateColumnStatisticsData } from "./datecolumnstatisticsdata";
import { DecimalColumnStatisticsData } from "./decimalcolumnstatisticsdata";
import { DoubleColumnStatisticsData } from "./doublecolumnstatisticsdata";
import { LongColumnStatisticsData } from "./longcolumnstatisticsdata";
import { StringColumnStatisticsData } from "./stringcolumnstatisticsdata";
import { ColumnStatisticsTypeEnum } from "./columnstatisticstypeenum";
/**
 * Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.
**/
export declare class ColumnStatisticsData extends SpeakeasyBase {
    binaryColumnStatisticsData?: BinaryColumnStatisticsData;
    booleanColumnStatisticsData?: BooleanColumnStatisticsData;
    dateColumnStatisticsData?: DateColumnStatisticsData;
    decimalColumnStatisticsData?: DecimalColumnStatisticsData;
    doubleColumnStatisticsData?: DoubleColumnStatisticsData;
    longColumnStatisticsData?: LongColumnStatisticsData;
    stringColumnStatisticsData?: StringColumnStatisticsData;
    type: ColumnStatisticsTypeEnum;
}
