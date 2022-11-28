import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BinaryColumnStatisticsData } from "./binarycolumnstatisticsdata";
import { BooleanColumnStatisticsData } from "./booleancolumnstatisticsdata";
import { DateColumnStatisticsData } from "./datecolumnstatisticsdata";
import { DecimalColumnStatisticsData } from "./decimalcolumnstatisticsdata";
import { DoubleColumnStatisticsData } from "./doublecolumnstatisticsdata";
import { LongColumnStatisticsData } from "./longcolumnstatisticsdata";
import { StringColumnStatisticsData } from "./stringcolumnstatisticsdata";
import { ColumnStatisticsTypeEnum } from "./columnstatisticstypeenum";



// ColumnStatisticsData
/** 
 * Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.
**/
export class ColumnStatisticsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BinaryColumnStatisticsData" })
  binaryColumnStatisticsData?: BinaryColumnStatisticsData;

  @SpeakeasyMetadata({ data: "json, name=BooleanColumnStatisticsData" })
  booleanColumnStatisticsData?: BooleanColumnStatisticsData;

  @SpeakeasyMetadata({ data: "json, name=DateColumnStatisticsData" })
  dateColumnStatisticsData?: DateColumnStatisticsData;

  @SpeakeasyMetadata({ data: "json, name=DecimalColumnStatisticsData" })
  decimalColumnStatisticsData?: DecimalColumnStatisticsData;

  @SpeakeasyMetadata({ data: "json, name=DoubleColumnStatisticsData" })
  doubleColumnStatisticsData?: DoubleColumnStatisticsData;

  @SpeakeasyMetadata({ data: "json, name=LongColumnStatisticsData" })
  longColumnStatisticsData?: LongColumnStatisticsData;

  @SpeakeasyMetadata({ data: "json, name=StringColumnStatisticsData" })
  stringColumnStatisticsData?: StringColumnStatisticsData;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ColumnStatisticsTypeEnum;
}
